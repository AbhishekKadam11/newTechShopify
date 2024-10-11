import { createApp } from "vue";
import customFilter from "../customFilters";

let configCache = {};

const init = (option = {}) => {
    const app = createApp(option);
    return app;
}

const loadConfig = (nameAliase) => {
    if (nameAliase) {
        if (!configCache[nameAliase]) {
            configCache[nameAliase] = import(`@components/${nameAliase}`)
                .then(({ default: Instance }) => Instance)
                .catch(err => {
                    console.log(err);
                    return {};
                });
        }
        return configCache[nameAliase];
    }
    throw new Error('Name aliase not found for component');
}
    

class vueAppInitalize extends HTMLElement {
    async connectedCallback() {
        const { uid, vue: alias } = this.dataset;
        if (!uid) {
            const config = await loadConfig(alias);
            config.name = alias;
            const app = init(config);
            const { _uid: instanceId } = app;
            this.dataset.uid = instanceId;
            app.config.compilerOptions.delimiters = ['${', '}'];
            // app._component = alias
            // app.config.customElements= alias
            // app.config.globalProperties.$filters = customFilter;
            app.mount(this);
        }
    }

    desconnectCallback() {
        const { __vue_app__: vm} = this;
        if(vm){
            vm.unmoint();
        }
    }
}

customElements.define('vue-app', vueAppInitalize);