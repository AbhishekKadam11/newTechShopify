import { createApp } from "vue";
import customFilter from "../customFilters";

let configCache = {};

const init = (option = {}) => {
    const app = createApp(option);
    return app;
}

const loadConfig = (nameAliase) => {
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

class vueAppInitalize extends HTMLElement {
    async connectedCallback() {
        const { uid, vue: alias } = this.dataset;
        console.log("alias=>", alias)
        if (!uid) {
            const config = await loadConfig(alias);
            config.name = alias;
            const app = init(config);
            const { _uid: instanceId } = app;
            this.dataset.uid = instanceId;
            app.config.compilerOptions.delimiters = ['${', '}'];
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