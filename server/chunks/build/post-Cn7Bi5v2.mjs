const baseUrl = "https://www.nyknow.com";
const getPosts = (currentPage, keyWord, type) => {
  try {
    const response = fetch(`${baseUrl}/api/post/getposts?currentPage=${currentPage}&keyWord=${keyWord}&type=${type}`, {
      method: "GET",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching posts", error);
  }
};
const getPost = (postId) => {
  try {
    const response = fetch(`${baseUrl}/api/post/${postId}`, {
      method: "GET",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching post", error);
  }
};
const createPost = (type, title, content) => {
  try {
    console.log(type, title, content);
    const response = fetch(`${baseUrl}/api/post`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ type, title, content })
    });
    return response;
  } catch (error) {
    console.log("Error creating post", error);
  }
};
const getUserPosts = (currentPage) => {
  try {
    const response = fetch(`${baseUrl}/api/post/getuserposts?currentPage=${currentPage}`, {
      method: "GET",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching user posts", error);
  }
};
const deletePostById = (postId) => {
  try {
    const response = fetch(`${baseUrl}/api/post/${postId}`, {
      method: "DELETE",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error deleting post", error);
  }
};

export { getUserPosts as a, getPost as b, createPost as c, deletePostById as d, getPosts as g };
//# sourceMappingURL=post-Cn7Bi5v2.mjs.map
