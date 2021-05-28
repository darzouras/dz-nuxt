<template>
    <div class="font-sans w-full min-h-screen bg-white color-purple-50">
        <main>
            <transition name="fade">
                <Nuxt />
            </transition>
        </main>
    </div>
</template>

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