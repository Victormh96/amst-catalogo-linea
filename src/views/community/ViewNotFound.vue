<template>

    <!--Title-->
    <title>Página No Encontrada</title>

    <!--Main-->
    <main v-if="(skeleton)" class="top">
        <!--Section-->
        <section class="mt-2"  >
            <img src="@/../public/img/assets/404.png" alt="404" class="mx-auto d-block">
        </section>
    </main>

    <!--Skeleton-->
    <main class="top" v-else>
        <div id="skeleton"></div>
    </main>

    <!--Footer-->
    <Footer />

</template>

<!--========Script========-->
<script>
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    components: {
        Footer,
    },

    data() {
        return {
            skeleton: false,
        }
    },

    methods: {
        loading(item) {
            this.skeleton = item
        }
    },

    async mounted() {
        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)

    },
};
</script>