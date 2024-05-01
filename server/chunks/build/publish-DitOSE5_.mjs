import { E as ElText } from './el-text-X__PoJ-C.mjs';
import { E as ElSelect, a as ElOption } from './el-select-oVvvMFbd.mjs';
import { E as ElInput } from './el-input-Btcno3DM.mjs';
import { h as __nuxt_component_8 } from './server.mjs';
import { E as ElButton } from './index-BsS0OoOZ.mjs';
import { E as ElMessage } from './el-message-arfW-tYb.mjs';
import { defineComponent, ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createPost } from './post-Cn7Bi5v2.mjs';
import './base-TFdoAnCk.mjs';
import './el-popper-CBVVU3Ed.mjs';
import './index-BQtHQPwO.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './index-CUqN8X7N.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "publish",
  __ssrInlineRender: true,
  setup(__props) {
    const selectCategory = ref("");
    const inputTitle = ref("");
    const data = ref("");
    const uploadPost = async () => {
      let response;
      response = await createPost(selectCategory.value, inputTitle.value, data.value);
      if (response) {
        const responseData = await response.json();
        if (responseData.code === 0) {
          ElMessage({
            message: responseData.message,
            type: "success"
          });
          selectCategory.value = "";
          inputTitle.value = "";
          data.value = "";
          const quill = (void 0).querySelector(".ql-editor");
          if (quill) {
            quill.innerHTML = "";
          }
        } else {
          ElMessage({
            message: responseData.message,
            type: "error"
          });
        }
      } else {
        console.log("Error fetching user info");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_text = ElText;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input = ElInput;
      const _component_ClientOnly = __nuxt_component_8;
      const _component_el_button = ElButton;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u5E03\u5E16\u5B50`);
          } else {
            return [
              createTextVNode("\u53D1\u5E03\u5E16\u5B50")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h5>\u9009\u62E9\u5206\u7C7B\uFF1A</h5>`);
      _push(ssrRenderComponent(_component_el_select, {
        modelValue: selectCategory.value,
        "onUpdate:modelValue": ($event) => selectCategory.value = $event,
        placeholder: "\u9009\u62E9",
        style: { "width": "100%" },
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u62DB\u8058",
              value: "\u62DB\u8058"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u65B0\u95FB",
              value: "\u65B0\u95FB"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u751F\u6D3B",
              value: "\u751F\u6D3B"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u79D1\u6280",
              value: "\u79D1\u6280"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u5A31\u4E50",
              value: "\u5A31\u4E50"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u793E\u4F1A",
              value: "\u793E\u4F1A"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_option, {
              label: "\u7F16\u7A0B",
              value: "\u7F16\u7A0B"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_option, {
                label: "\u62DB\u8058",
                value: "\u62DB\u8058"
              }),
              createVNode(_component_el_option, {
                label: "\u65B0\u95FB",
                value: "\u65B0\u95FB"
              }),
              createVNode(_component_el_option, {
                label: "\u751F\u6D3B",
                value: "\u751F\u6D3B"
              }),
              createVNode(_component_el_option, {
                label: "\u79D1\u6280",
                value: "\u79D1\u6280"
              }),
              createVNode(_component_el_option, {
                label: "\u5A31\u4E50",
                value: "\u5A31\u4E50"
              }),
              createVNode(_component_el_option, {
                label: "\u793E\u4F1A",
                value: "\u793E\u4F1A"
              }),
              createVNode(_component_el_option, {
                label: "\u7F16\u7A0B",
                value: "\u7F16\u7A0B"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h5>\u6807\u9898\uFF1A</h5>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: inputTitle.value,
        "onUpdate:modelValue": ($event) => inputTitle.value = $event,
        style: { "width": "100%", "height": "40px", "margin-bottom": "20px" },
        placeholder: "\u6807\u9898\u63A8\u8350\u572830\u5B57\u4EE5\u5185"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        type: "danger"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6CE8\u610F: \u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u9AD8\u4E8E2MB!`);
          } else {
            return [
              createTextVNode("\u6CE8\u610F: \u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u9AD8\u4E8E2MB!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        style: { "margin-top": "20px", "width": "100%" },
        onClick: uploadPost
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u5E03`);
          } else {
            return [
              createTextVNode("\u53D1\u5E03")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index/publish.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=publish-DitOSE5_.mjs.map
