<template>
    <!--Title-->
    <title>Página No Encontrada</title>

    <!--Navbar-->
    <Navbar />

    <!--Main-->
    <main v-if="(skeleton)" class="top">

        <!--Section-->
        <section class="d-flex align-items-center">
            <img src="@/../public/img/assets/404.png" alt="404" class="mx-auto d-block img-fluid">
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
import Navbar from "@/components/community/ComponentNavbar.vue"
import Footer from "@/components/community/ComponentFooter.vue"

export default {
    data() {
        return {
            skeleton: false,
        }
    },

    async mounted() {
        // Skeleton
        setTimeout(() => {
            this.skeleton = true
        }, 950)
    },

    components: {
        Footer,
        Navbar
    },

    methods: {
        // Loading
        loading(item) {
            this.skeleton = item
        }
    },
};
</script>