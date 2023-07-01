import { createPinia } from 'pinia';
import { markRaw } from 'vue';
import router from '../router';
import { Router } from 'vue-router';
import piniaPersist from 'pinia-plugin-persist'

declare module 'pinia' {
   export interface PiniaCustomProperties {
      router: Router;
   }
}

const pinia = createPinia();
pinia.use(({ store }) => {
   store.router = markRaw(router);
});
pinia.use(piniaPersist)


// You can add Pinia plugins here
// pinia.use(SomePiniaPlugin)

export default pinia;
