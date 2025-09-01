import { axiosInstance } from "./axios";

export const signup = async (signupData: any) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

export const login = async (loginData: any) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};
export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.error("Error in getAuthUser:", error);
    return null;
  }
};

export const completeOnboarding = async (userData: any) => {
  const res = await axiosInstance.post("/auth/onboarding", userData);
  return res.data;
};

export const getUserFriends = async () => {
  const res = await axiosInstance.get("/users/friends");
  return res.data;
};
export const getRecommendedUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data?.recommendedUsers || [];
};
export const getoutgoingFriendReqs = async () => {
  const res = await axiosInstance.get("/users/outgoing-friend-requests");
  return res.data?.outgoingReqs || [];
};

export const sendFriendRequest = async (userId: string) => {
  const res = await axiosInstance.post(`/users/friend-request/${userId}`);
  return res.data;
};

export const getFriendRequests = async () => {
  const res = await axiosInstance.get("/users/friend-request");
  return res.data;
};
export const acceptFriendReq = async (userId: string) => {
  const res = await axiosInstance.put(`/users/friend-request/${userId}/accept`);
  return res.data;
};
