<script>
import { computed, h, inject } from "vue";

export default {
    props: {
        tag: {
            type: String,
            default: "div"
        },
        xl: String,
        lg: String,
        md: String,
        sm: String,
        xs: String,
        rows: Boolean,
        inline: Boolean,
        gap: [String, Object]
    },
    setup(props) {
        const grid = inject("__GIRD__");

        const grid_gap = computed(() => {
            const gap = props.gap;
            if (typeof gap == "object") {
                let { xs, sm, md, lg, xl } = gap;
                xs = xs || "";
                return {
                    xs: xs,
                    sm: sm || xs,
                    md: md || sm || xs,
                    lg: lg || md || sm || xs,
                    xl: xl || lg || md || sm || xs
                };
            } else {
                return {
                    xs: gap,
                    sm: gap,
                    md: gap,
                    lg: gap,
                    xl: gap
                };
            }
        });

        const style = computed(() => {
            const { xs, sm, md, lg, xl, inline, rows } = props;
            const gridGap = grid_gap.value;
            const style = {
                display: inline ? "inline-grid" : "grid"
            };
            const template =
                rows == "rows" ? `grid-template-rows` : `grid-template-columns`;
            if (grid.sizes.includes("xl") && xl) {
                style[template] = xl;
                style.gap = gridGap.xl;
            } else if (grid.sizes.includes("lg") && lg) {
                style[template] = lg;
                style.gap = gridGap.lg;
            } else if (grid.sizes.includes("md") && md) {
                style[template] = md;
                style.gap = gridGap.md;
            } else if (grid.sizes.includes("sm") && sm) {
                style[template] = sm;
                style.gap = gridGap.sm;
            } else if (grid.sizes.includes("xs")) {
                style[template] = xs;
                style.gap = gridGap.xs;
            } else {
                style[template] = "1fr";
                style.gap = gridGap.xs;
            }
            return style;
        });

        return { style };
    },
    render() {
        return h(
            this.tag,
            {
                style: this.style
            },
            this.$slots.default()
        );
    }
};
</script>
