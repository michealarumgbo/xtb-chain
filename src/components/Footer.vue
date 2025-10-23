<template>
    <footer class="bg-crypto-black border-t border-white/10">
        <div class="container mx-auto px-4 md:px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <!-- Logo and Description -->
                <div class="lg:col-span-2">
                    <a href="/" class="text-2xl font-bold text-gradient">XTBChain</a>
                    <p class="mt-4 text-[#8A8A9D] text-sm">
                        XTBChain is a leading cryptocurrency exchange offering a professional trading experience
                        with competitive fees and advanced security features.
                    </p>

                    <div class="flex space-x-4 mt-6">
                        <a v-for="(icon, idx) in socialLinks" :key="idx" href="#"
                            class="text-[#8A8A9D] hover:text-[#F7CF06] transition-colors">
                            <component :is="icon" class="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <!-- Products -->
                <div>
                    <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
                    <ul class="space-y-3">
                        <li v-for="(item, idx) in products" :key="idx">
                            <a href="#" class="text-[#8A8A9D] hover:text-white text-sm transition-colors">{{
                                item }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
                    <ul class="space-y-3">
                        <li v-for="(item, idx) in services" :key="idx">
                            <a href="#" class="text-[#8A8A9D] hover:text-[#ffffff] text-sm transition-colors">{{
                                item }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Support -->
                <div>
                    <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
                    <ul class="space-y-3">
                        <li v-for="(item, idx) in support" :key="idx">
                            <a href="#" class="text-[#8A8A9D] hover:text-[#ffffff] text-sm transition-colors">{{
                                item }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-white/10 mt-12 pt-8 text-center md:text-left">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-[#8A8A9D] text-sm">
                        &copy; {{ currentYear }} XTBChain. All rights reserved.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-[#8A8A9D] hover:text-[#ffffff] text-sm transition-colors">Terms of
                            Service</a>
                        <a href="#" class="text-[#8A8A9D] hover:text-[#ffffff] text-sm transition-colors">Privacy
                            Policy</a>
                        <a href="#" class="text-[#8A8A9D] hover:text-[#ffffff] text-sm transition-colors">Disclaimer</a>
                    </div>
                </div>

                <p class="text-[#8A8A9D] text-xs mt-4">
                    Risk Warning: Trading cryptocurrencies involves significant risk and can result in the loss of your
                    invested capital.
                    You should not invest more than you can afford to lose and should ensure that you fully understand
                    the risks involved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Github,
} from "lucide-vue-next";

const currentYear = new Date().getFullYear();

const socialLinks = [Twitter, Facebook, Linkedin, Instagram, Youtube, Github];

const products = [
    "Spot Trading",
    "Margin Trading",
    "Futures",
    "Staking",
    "Savings",
];

const services = [
    "Institutional",
    "VIP Program",
    "API",
    "Referral Program",
    "Affiliate",
];

const support = [
    "Help Center",
    "Fees",
    "Security",
    "Contact Us",
    "Status",
];
</script>

<style scoped>
/* Optional subtle hover effect */
a {
    transition: color 0.2s ease;
}
</style>
