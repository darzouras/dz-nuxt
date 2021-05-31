<template>
    <div class="font-sans w-full min-h-screen bg-white text-purple-100">
        <div class="w-11/12 md:w-10/12 py-5 md:py-10 mx-auto md:flex md:flex-wrap md:justify-between md:align-top lg:justify-center">
            <header class="md:w-1/5 z-1">
                <Nav />
                <!-- TODO: page data is called only on page-level components, maybe use named slot to get the nav content in by page -->
            </header>
            <main class="mt-20 md:mt-0 md:w-4/5 lg:w-3/5 z-0">
                <transition name="fade">
                    <Nuxt class="max-w-screen-sm m-auto" />
                </transition>
            </main>
            <footer class="w-full lg:w-1/5">
                <Footer />
            </footer>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Nav,
        Footer
    },
}
</script>

<style>
.fade-enter-active {
    transition-duration: 0.25s;
    transition-property: opacity, transform;
    transition-timing-function: ease-in;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateY(100px);
}
</style>