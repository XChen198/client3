const baseUrl = "https://www.nyknow.com";
const getComments = (postId, currentPage) => {
  try {
    const response = fetch(`${baseUrl}/api/comment?postId=${postId}&currentPage=${currentPage}`, {
      method: "GET",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching comments", error);
  }
};
const getChildComments = (parentId, currentPage) => {
  try {
    const response = fetch(`${baseUrl}/api/comment/child?parentId=${parentId}&currentPage=${currentPage}`, {
      method: "GET",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching child comments", error);
  }
};
const postComment = (postId, content) => {
  try {
    const response = fetch(`${baseUrl}/api/comment/post`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postId,
        content
      })
    });
    return response;
  } catch (error) {
    console.log("Error posting comment", error);
  }
};
const replyFirstComment = (parentId, postId, content) => {
  try {
    const response = fetch(`${baseUrl}/api/comment/reply`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parentId,
        postId,
        content
      })
    });
    return response;
  } catch (error) {
    console.log("Error replying comment", error);
  }
};
const delteComment = (commentId) => {
  try {
    const response = fetch(`${baseUrl}/api/comment`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: commentId
      })
    });
    return response;
  } catch (error) {
    console.log("Error deleting comment", error);
  }
};
const getAllComments = (currentPage) => {
  try {
    const response = fetch(`${baseUrl}/api/permission/getAllComments?currentPage=${currentPage}`, {
      method: "GET",
      credentials: "include"
    });
    return response;
  } catch (error) {
    console.log("Error fetching all comments", error);
  }
};

export { getChildComments as a, getComments as b, delteComment as d, getAllComments as g, postComment as p, replyFirstComment as r };
//# sourceMappingURL=comment-OiJ4_1L4.mjs.map
