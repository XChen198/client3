const baseUrl = "https://www.nyknow.com";
const getUserInfo = () => {
  try {
    const response = fetch(`${baseUrl}/api/user`, {
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching user info", error);
  }
};
const changePassword = (oldPassword, newPassword) => {
  try {
    const response = fetch(`${baseUrl}/api/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        oldPassword,
        newPassword
      }),
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error changing password", error);
  }
};

export { changePassword as c, getUserInfo as g };
//# sourceMappingURL=user-DmTzmh4W.mjs.map
