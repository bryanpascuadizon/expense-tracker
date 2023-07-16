export const getUserId = () => {
  if (typeof window !== "undefined") {
    const userId = localStorage.getItem("user-id");
    return userId;
  }
};
