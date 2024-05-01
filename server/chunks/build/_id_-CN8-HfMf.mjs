import { _ as _imports_0, E as ElAvatar } from './avatar-iZIKxOhX.mjs';
import { E as ElText } from './el-text-X__PoJ-C.mjs';
import { E as ElDivider } from './el-overlay-CF5_548L.mjs';
import { E as ElRow, a as ElCol } from './el-col-CSudT4mj.mjs';
import { E as ElInput } from './el-input-Btcno3DM.mjs';
import { E as ElButton } from './index-BsS0OoOZ.mjs';
import { E as ElPagination } from './el-pagination-BZX_UeuG.mjs';
import { h as __nuxt_component_8 } from './server.mjs';
import { E as ElMessage } from './el-message-arfW-tYb.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useUserStore } from './user-DxYaMXEb.mjs';
import { g as getUserInfo } from './user-DmTzmh4W.mjs';
import { a as getChildComments, b as getComments, p as postComment, r as replyFirstComment } from './comment-OiJ4_1L4.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './base-TFdoAnCk.mjs';
import './index-CUqN8X7N.mjs';
import './index-BQtHQPwO.mjs';
import './el-select-oVvvMFbd.mjs';
import './el-popper-CBVVU3Ed.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { params } = useRoute();
    const userStore = useUserStore();
    const router = useRouter();
    const post = ref({
      _id: "",
      type: "",
      title: "",
      content: "",
      username: "",
      avatar: "",
      updatedAt: "",
      visitors: 0,
      comments: 0
    });
    const currentPage = ref(1);
    const currentChildPage = ref(1);
    const total = ref(0);
    const content = ref("");
    const replycontent = ref("");
    ref("");
    const temp = ref("");
    ref("");
    const child = ref({
      childComments: [],
      total: 0,
      parent: {
        _id: "",
        content: "",
        createdAt: "",
        username: "",
        avatar: ""
      }
    });
    const comments = ref([]);
    const drawer = ref(false);
    const size = ref("50%");
    const showReplyArea = (commentId) => {
      replycontent.value = "";
      temp.value = commentId;
    };
    const showChildComments = async (commentId, isShow) => {
      if ((void 0).innerWidth < 768) {
        size.value = "100%";
      } else {
        size.value = "50%";
      }
      let response;
      currentChildPage.value = 1;
      response = await getChildComments(commentId, currentChildPage.value);
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          child.value.childComments = responseData.data.comments;
          child.value.total = responseData.data.total;
          child.value.parent = responseData.data.parent;
        } else {
          console.log("Error fetching child comments");
        }
      } else {
        console.log("Error fetching child comments");
      }
      drawer.value = isShow;
    };
    const handlePageChange = async (val) => {
      currentPage.value = val;
      let response;
      response = await getComments(params.id, currentPage.value);
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          comments.value = responseData.data.comments;
          total.value = responseData.data.total;
        } else {
          console.log("Error fetching comments");
        }
      } else {
        console.log("Error fetching comments");
      }
    };
    const sendComment = async () => {
      let response;
      response = await getUserInfo();
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          userStore.setUserInfo(responseData.data);
        } else {
          router.push("/login");
        }
      } else {
        console.log("Error fetching user info");
      }
      response = await postComment(params.id, content.value);
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          ElMessage.success("\u8BC4\u8BBA\u6210\u529F");
          content.value = "";
          let result;
          result = await getComments(params.id, currentPage.value);
          if (result) {
            const resultData = await result.json();
            if (resultData.code === 0) {
              comments.value = resultData.data.comments;
              total.value = resultData.data.total;
            } else {
              console.log("Error fetching comments");
            }
          } else {
            console.log("Error fetching comments");
          }
        } else {
          ElMessage.error("\u8BC4\u8BBA\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5");
        }
      } else {
        console.log("Error posting comment");
      }
    };
    const replyComment = async (commentId) => {
      let response;
      response = await getUserInfo();
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          userStore.setUserInfo(responseData.data);
        } else {
          router.push("/login");
        }
      } else {
        console.log("Error fetching user info");
      }
      response = await replyFirstComment(commentId, params.id, replycontent.value);
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          ElMessage.success("\u56DE\u590D\u6210\u529F");
          let result;
          replycontent.value = "";
          result = await getComments(params.id, currentPage.value);
          if (result) {
            const resultData = await result.json();
            if (resultData.code === 0) {
              comments.value = resultData.data.comments;
            } else {
              console.log("Error fetching comments");
            }
          } else {
            console.log("Error fetching comments");
          }
          showChildComments(commentId, false);
        } else {
          ElMessage.error("\u56DE\u590D\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5");
        }
      } else {
        console.log("Error posting comment");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_avatar = ElAvatar;
      const _component_el_text = ElText;
      const _component_el_divider = ElDivider;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_pagination = ElPagination;
      const _component_client_only = __nuxt_component_8;
      _push(`<!--[--><div class="back" data-v-ea97d8f4><div class="backbtn" data-v-ea97d8f4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px", "vertical-align": "text-top" })}" data-v-ea97d8f4><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" data-v-ea97d8f4></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" data-v-ea97d8f4></path></svg><span style="${ssrRenderStyle({ "margin-left": "5px" })}" data-v-ea97d8f4>\u8FD4\u56DE</span></div></div><div class="post" data-v-ea97d8f4>`);
      _push(ssrRenderComponent(_component_el_avatar, {
        size: 50,
        src: post.value.avatar,
        style: { "vertical-align": "middle" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-ea97d8f4${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: _imports_0 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="username" data-v-ea97d8f4>${ssrInterpolate(post.value.username)}</span><div class="main" data-v-ea97d8f4><h3 data-v-ea97d8f4>${ssrInterpolate(post.value.title)}</h3><div data-v-ea97d8f4>${post.value.content}</div></div><div class="footer" data-v-ea97d8f4><span data-v-ea97d8f4>${ssrInterpolate(post.value.updatedAt.split("T")[0])}</span></div></div><div class="comments" data-v-ea97d8f4>`);
      _push(ssrRenderComponent(_component_el_text, { class: "mx-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6D4F\u89C8\u91CF: ${ssrInterpolate(post.value.visitors)}`);
          } else {
            return [
              createTextVNode("\u6D4F\u89C8\u91CF: " + toDisplayString(post.value.visitors), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        style: { "margin-left": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8BC4\u8BBA\u6570: ${ssrInterpolate(post.value.comments)}`);
          } else {
            return [
              createTextVNode("\u8BC4\u8BBA\u6570: " + toDisplayString(post.value.comments), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(comments.value, (comment) => {
        _push(`<div class="comment" data-v-ea97d8f4>`);
        _push(ssrRenderComponent(_component_el_avatar, {
          size: 45,
          src: comment.avatar,
          style: { "vertical-align": "middle" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-ea97d8f4${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: _imports_0 })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span style="${ssrRenderStyle({ "margin-left": "8px" })}" data-v-ea97d8f4>${ssrInterpolate(comment.username)}</span><div class="content" data-v-ea97d8f4>`);
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1",
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.content)}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        if (comment.total !== 0) {
          _push(ssrRenderComponent(_component_el_row, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(comment.childComments, (childComment) => {
                  _push2(ssrRenderComponent(_component_el_col, {
                    style: { "margin-bottom": "8px" },
                    key: childComment._id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_text, { class: "mx-1" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(childComment.username)}: ${ssrInterpolate(childComment.content)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_text, { class: "mx-1" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
                if (comment.total > 2) {
                  _push2(ssrRenderComponent(_component_el_col, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_text, {
                          class: "mx-1 checkTotal",
                          onClick: ($event) => showChildComments(comment._id, true)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`\u67E5\u770B\u5168\u90E8${ssrInterpolate(comment.total)}\u6761\u8BC4\u8BBA`);
                            } else {
                              return [
                                createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_text, {
                            class: "mx-1 checkTotal",
                            onClick: ($event) => showChildComments(comment._id, true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(comment.childComments, (childComment) => {
                    return openBlock(), createBlock(_component_el_col, {
                      style: { "margin-bottom": "8px" },
                      key: childComment._id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_text, { class: "mx-1" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  comment.total > 2 ? (openBlock(), createBlock(_component_el_col, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_text, {
                        class: "mx-1 checkTotal",
                        onClick: ($event) => showChildComments(comment._id, true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div style="${ssrRenderStyle({ "margin": "0 auto" })}" class="timeAndReply" data-v-ea97d8f4>`);
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.createdAt.split("T")[0])}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.createdAt.split("T")[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1 reply",
          style: { "margin-left": "10px" },
          onClick: ($event) => showReplyArea(comment._id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u56DE\u590D`);
            } else {
              return [
                createTextVNode("\u56DE\u590D")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (temp.value === comment._id) {
          _push(`<div data-v-ea97d8f4>`);
          _push(ssrRenderComponent(_component_el_input, {
            modelValue: replycontent.value,
            "onUpdate:modelValue": ($event) => replycontent.value = $event,
            modelModifiers: { trim: true },
            placeholder: "\u8BF7\u8F93\u5165\u8981\u56DE\u590D\u7684\u5185\u5BB9",
            type: "textarea",
            style: { "width": "100%" },
            rows: 2
          }, null, _parent));
          _push(ssrRenderComponent(_component_el_button, {
            type: "primary",
            style: { "width": "100%", "margin-top": "10px" },
            onClick: ($event) => replyComment(comment._id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u56DE\u590D`);
              } else {
                return [
                  createTextVNode("\u56DE\u590D")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_el_pagination, {
        background: "",
        layout: "prev, pager, next",
        total: total.value,
        "page-size": 10,
        "pager-count": 5,
        style: { "justify-content": "center" },
        onCurrentChange: handlePageChange
      }, null, _parent));
      _push(`</div><div class="sendComment" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-ea97d8f4>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: content.value,
        "onUpdate:modelValue": ($event) => content.value = $event,
        modelModifiers: { trim: true },
        placeholder: "\u8BF7\u8F93\u5165\u8BC4\u8BBA\u5185\u5BB9",
        type: "textarea",
        style: { "width": "100%" },
        rows: 6
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        onClick: sendComment,
        style: { "width": "100%", "margin-top": "10px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u9001`);
          } else {
            return [
              createTextVNode("\u53D1\u9001")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea97d8f4"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CN8-HfMf.mjs.map
