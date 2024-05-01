import { isVNode } from 'vue';
import { e as isArray_1 } from './server.mjs';

const flattedChildren = (children) => {
  const vNodes = isArray_1(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray_1(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray_1(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
};

export { flattedChildren as f };
//# sourceMappingURL=vnode-DGZHcxjK.mjs.map
