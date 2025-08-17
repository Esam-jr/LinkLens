import User from "../models/User.js";

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

    res
      .status(200)
      .json(
        { message: "Recommended users fetched successfully" },
        recommendedUsers
      );
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
        "frends",
        "fullName profilePic nativeLanguage learningLanguage"
      );
    res.status(200).json(user.freinds);
  } catch (error) {
    console.error("Error in getMyFreinds controller", error);
    res.status(500).json({ message: "Error fetching friends", error });
  }
}

export async function sendFreindRequest(req, res) {
  const { id } = req.params;
}
