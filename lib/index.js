import { computed, reactive, readonly, ref } from "vue";
import grid from "../components/grid.vue";

export default {
    install(app) {
        const getSize = () => {
            if (window.innerWidth > 1199) {
                return "xl,lg,md,sm,xs";
            } else if (window.innerWidth > 991) {
                return "lg,md,sm,xs";
            } else if (window.innerWidth > 767) {
                return "md,sm,xs";
            } else if (window.innerWidth > 575) {
                return "sm,xs";
            } else {
                return "xs";
            }
        };

        const size = ref(getSize());

        const use = reactive({
            sizes: computed(() => size.value.split(",")),
            size: computed(() => use.sizes[0])
        });

        window.addEventListener("resize", () => {
            const new_size = getSize();
            if (new_size !== size.value) {
                size.value = new_size;
            }
        });

        const __GIRD__ = readonly(use);

        app.component("vGird", grid);
        app.provide("__GIRD__", __GIRD__);
        app.config.globalProperties.__GIRD__ = __GIRD__;
    }
};
