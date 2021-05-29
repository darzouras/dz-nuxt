<template>
    <div class="font-sans w-full min-h-screen bg-white color-purple-50">
        <div class="w-11/12 md:w-10/12 py-5 md:py-10 mx-auto md:flex md:flex-wrap">
            <header class="md:w-1/5">
                <Nav />
                <!-- TODO: page data is called only on page-level components, maybe use named slot to get the nav content in by page -->
            </header>
            <main class="md:w-4/5 lg:w-3/5">
                <transition name="fade">
                    <Nuxt />
                </transition>
            </main>
            <footer class="w-full lg:w-1/5">
                I'm a footer?
            </footer>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
    components: {
        Nav,
    },
}
</script>

<style>
.fade-enter-active {
    transition-duration: 0.45s;
    transition-property: opacity;
    transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>