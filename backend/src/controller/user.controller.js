import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user._id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } }, // Exclude current user
        { _id: { $nin: currentUser.friends } }, // Exclude friends
        { isOnbording: true }, // Only include users who have completed onboarding
      ],
    });

    res.status(200).json({
      message: "Recommended users fetched successfully",
      recommendedUsers,
    });
  } catch (error) {
    console.error("Error fetching recommended users:", error);
    res
      .status(500)
      .json({ message: "Error fetching recommended users", error });
  }
}

export async function getMyFriends(req, res) {
  try {
    const user = await User.findById(req.user._id)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLanguage learningLanguage"
      );
    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Error in getMyFriends controller", error);
    res.status(500).json({ message: "Error fetching friends", error });
  }
}

export async function sendFriendRequest(req, res) {
  try {
    const { id: recipientId } = req.params;
    const myId = req.user._id;

    if (recipientId === myId.toString()) {
      return res
        .status(400)
        .json({ message: "You cannot send a friend request to yourself." });
    }

    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(404).json({ message: "Recipient not found." });
    }
    if (recipient.friends.includes(myId)) {
      return res
        .status(400)
        .json({ message: "You are already friends with this user." });
    }

    const existingRequest = await FriendRequest.findOne({
      $or: [
        { sender: myId, recipient: recipientId },
        { sender: recipientId, recipient: myId },
      ],
    });
    if (existingRequest) {
      return res
        .status(400)
        .json({ message: "Friend request already exists." });
    }

    const friendRequest = await FriendRequest.create({
      sender: myId,
      recipient: recipientId,
    });

    res.status(201).json({
      message: "Friend request sent successfully",
      friendRequest,
    });
  } catch (error) {
    console.error("Error sending friend request:", error);
    res.status(500).json({ message: "Error sending friend request", error });
  }
}

export async function acceptFriendRequest(req, res) {
  try {
    const { id: requestId } = req.params;
    const userId = req.user._id;

    const friendRequest = await FriendRequest.findById(requestId);
    if (!friendRequest) {
      return res.status(404).json({ message: "Friend request not found." });
    }

    if (friendRequest.recipient.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to accept this request." });
    }

    friendRequest.status = "accepted";
    await friendRequest.save();

    const senderId = friendRequest.sender;

    await Promise.all([
      User.findByIdAndUpdate(userId, {
        $addToSet: { friends: senderId },
      }),
      User.findByIdAndUpdate(senderId, {
        $addToSet: { friends: userId },
      }),
    ]);

    res.status(200).json({ message: "Friend request accepted successfully" });
  } catch (error) {
    console.error("Error accepting friend request:", error);
    res.status(500).json({ message: "Error accepting friend request", error });
  }
}

export async function getFriendRequests(req, res) {
  try {
    const userId = req.user._id;

    const incomingReqs = await FriendRequest.find({
      recipient: userId,
      status: "pending",
    }).populate(
      "sender",
      "fullName profilePic nativeLanguage learningLanguage"
    );

    const acceptedReqs = await FriendRequest.find({
      sender: userId,
      status: "accepted",
    }).populate("recipient", "fullName profilePic ");
    res.status(200).json({
      incomingReqs,
      acceptedReqs,
    });
  } catch (error) {
    console.error("Error fetching friend requests:", error);
    res.status(500).json({ message: "Error fetching friend requests", error });
  }
}

export async function getOutgoingFriendReqs(req, res) {
  try {
    const userId = req.user._id;

    const outgoingReqs = await FriendRequest.find({
      sender: userId,
      status: "pending",
    }).populate(
      "recipient",
      "fullName profilePic nativeLanguage learningLanguage"
    );

    res.status(200).json({ outgoingReqs });
  } catch (error) {
    console.error("Error fetching outgoing friend requests:", error);
    res.status(500).json({
      message: "Error fetching outgoing friend requests",
      error,
    });
  }
}
