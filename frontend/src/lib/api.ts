import { axiosInstance } from "./axios";

export const signup = async (signupData: any) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};
