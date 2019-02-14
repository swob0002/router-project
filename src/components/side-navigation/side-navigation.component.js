export default {
    name: 'SideNavigation',
    data() {
        return {
            activeLink: null
        };
    },
    // created() {

    // },
    mounted() {
        /* eslint-disable */
        console.log(this.$route);
        this.activeLink = this.$route.path
    },
    watch: {
        $route(newVal, oldVal) {
            console.log(newVal, oldVal);
            this.activeLink = newVal.path
        }
    }
};