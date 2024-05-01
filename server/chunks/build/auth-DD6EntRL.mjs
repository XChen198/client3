const baseUrl = "https://www.nyknow.com";
const signup = (username, password, confirmPassword, captcha) => {
  try {
    const response = fetch(`${baseUrl}/api/auth/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
        captcha
      })
    });
    return response;
  } catch (error) {
    console.log("Error signing up:", error);
  }
};
const login = (username, password) => {
  try {
    const response = fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    return response;
  } catch (error) {
    console.log("Error fetching login", error);
  }
};
const logout = () => {
  try {
    const response = fetch(`${baseUrl}/api/auth/logout`, {
      credentials: "include",
      method: "POST"
    });
    return response;
  } catch (error) {
    console.log("Error logging out:", error);
  }
};
const getCaptha = () => {
  try {
    const response = fetch(`${baseUrl}/api/auth/captcha`, {
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching captcha:", error);
  }
};

export { login as a, getCaptha as g, logout as l, signup as s };
//# sourceMappingURL=auth-DD6EntRL.mjs.map
