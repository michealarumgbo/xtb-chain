<template>
    <header :class="[
        'fixed top-0 text-white left-0 right-0 z-50 transition-all duration-300',
        isScrolled
            ? 'py-4 bg-crypto-black/90 navbar-blur border-b border-white/10'
            : 'py-6 bg-transparent'
    ]">
        <div class="flex container mx-auto px-4 md:px-6 items-center justify-between">
            <div class="flex items-center">
                <a href="/" class="text-2xl font-bold text-gradient text-[#F7CF06]">XTBChain</a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <router-link v-for="(navItem, index) in navItems" :key="index" :to="navItem.href"
                    active-class="text-[#F7CF06]"
                    class="text-sm font-medium text-crypto-white hover:text-[#F7CF06] transition-colors">
                    {{ navItem.name }}
                </router-link>
            </nav>

            <!-- Desktop Call to Action -->
            <div class="hidden md:flex items-center space-x-4">
                <button class="text-sm font-medium text-crypto-white hover:text-[#F7CF06] transition-colors">
                    Log In
                </button>
                <button class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg">
                    Register
                </button>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-crypto-white focus:outline-none"
                @click="isMobileMenuOpen = !isMobileMenuOpen">
                <component :is="isMobileMenuOpen ? XIcon : MenuIcon" class="w-6 h-6" />
            </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-fade">
            <div v-if="isMobileMenuOpen" class="md:hidden bg-[#1E1E22] animate-slide-in-right">
                <div class="container mx-auto px-4 py-6 space-y-6">
                    <router-link v-for="(navItem, index) in navItems" :key="index" :to="navItem.href"
                        active-class="text-[#F7CF06]"
                        class="block text-sm font-medium text-crypto-white hover:text-[#F7CF06] transition-colors">
                        {{ navItem.name }}
                    </router-link>

                    <div class="pt-4 space-y-3">
                        <button
                            class="w-full justify-center text-sm font-medium text-crypto-white border border-white/10 rounded-lg py-2">
                            Log In
                        </button>
                        <button
                            class="w-full justify-center bg-[#F7CF06] hover:bg-yellow-500 text-crypto-black font-medium py-2 rounded-lg">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Menu as MenuIcon, X as XIcon } from "lucide-vue-next";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "/markets" },
    { name: "Trade", href: "/trade-page" },
    { name: "Derivatives", href: "/derivatives" },
    { name: "Earn", href: "/earn-page" },
    { name: "Learn", href: "/learn" },
];


const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>
