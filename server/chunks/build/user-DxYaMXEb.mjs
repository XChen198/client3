import { ref } from 'vue';
import { l as defineStore } from './server.mjs';

const useUserStore = defineStore("user", () => {
  const userInfo = ref(null);
  const setUserInfo = (newUser) => {
    userInfo.value = newUser;
  };
  return {
    userInfo,
    setUserInfo
  };
});

export { useUserStore as u };
//# sourceMappingURL=user-DxYaMXEb.mjs.map
