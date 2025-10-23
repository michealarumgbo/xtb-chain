<template>
    <section class="py-20 bg-[#121214] relative overflow-hidden">
        <div class="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>

        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <!-- Left Side: Text and Buttons -->
                <div class="md:w-1/2 space-y-6">
                    <h2 class="text-3xl md:text-4xl font-bold leading-tight">
                        Trade Anywhere with the
                        <span class="text-gradient">XTBChain App</span>
                    </h2>
                    <p class="text-[#8A8A9D]">
                        Experience the full power of XTBChain on your mobile device. Download our app and trade
                        cryptocurrencies anytime, anywhere.
                    </p>

                    <ul class="space-y-3">
                        <li v-for="(benefit, index) in benefits" :key="index" class="flex items-center">
                            <CheckCircle class="h-5 w-5 text-[#F7CF06] mr-3 shrink-0" />
                            <span class="text-sm">{{ benefit }}</span>
                        </li>
                    </ul>

                    <div class="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <Button class="bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] font-medium">
                            Download for iOS
                        </Button>
                        <Button variant="outline" class="border-white/20 hover:bg-white/5">
                            Download for Android
                        </Button>
                    </div>
                </div>

                <!-- Right Side: Phone Mockup -->
                <div class="md:w-1/2 relative flex justify-center">
                    <div
                        class="relative h-[500px] w-[250px] bg-[#1E1E22] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                        <div class="absolute inset-0 flex flex-col">
                            <!-- Top notch -->
                            <div class="h-8 bg-[#121214] flex items-center justify-center">
                                <div class="w-20 h-4 rounded-full bg-[#1E1E22]"></div>
                            </div>

                            <!-- Inner content -->
                            <div class="flex-1 p-2">
                                <div class="h-full w-full bg-[#121214] rounded-lg overflow-hidden flex flex-col">
                                    <!-- Header -->
                                    <div class="h-12 bg-[#1E1E22]/70 flex items-center px-4">
                                        <div class="flex-1">
                                            <div class="w-20 h-4 bg-white/10 rounded"></div>
                                        </div>
                                        <div class="h-6 w-6 rounded-full bg-[#F7CF06]"></div>
                                    </div>

                                    <!-- Body content -->
                                    <div class="flex-1 p-3 space-y-3">
                                        <div class="h-24 bg-[#1E1E22]/50 rounded-lg"></div>

                                        <div class="flex space-x-2">
                                            <div class="flex-1 h-10 bg-[#1E1E22]/50 rounded-lg"></div>
                                            <div class="flex-1 h-10 bg-[#1E1E22]/50 rounded-lg"></div>
                                        </div>

                                        <div class="flex space-x-2">
                                            <div class="flex-1 h-14 bg-green-500/20 rounded-lg"></div>
                                            <div class="flex-1 h-14 bg-red-500/20 rounded-lg"></div>
                                        </div>

                                        <div class="h-32 bg-[#1E1E22]/50 rounded-lg"></div>

                                        <div class="space-y-2">
                                            <div class="h-10 bg-[#1E1E22]/50 rounded-lg"></div>
                                            <div class="h-10 bg-[#1E1E22]/50 rounded-lg"></div>
                                            <div class="h-10 bg-[#F7CF06] rounded-lg"></div>
                                        </div>
                                    </div>

                                    <!-- Bottom nav -->
                                    <div class="h-14 bg-[#1E1E22]/70 flex items-center justify-around px-4">
                                        <div class="h-6 w-6 bg-white/10 rounded"></div>
                                        <div class="h-6 w-6 bg-white/10 rounded"></div>
                                        <div class="h-6 w-6 bg-[#F7CF06] rounded-full"></div>
                                        <div class="h-6 w-6 bg-white/10 rounded"></div>
                                        <div class="h-6 w-6 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Glow effect behind the phone -->
                    <div class="absolute -bottom-10 w-40 h-40 rounded-full bg-[#F7CF06]/20 blur-3xl z-[-1]"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { CheckCircle } from "lucide-vue-next";
import Button from "@/components/ui/button.vue";

const benefits = ref([
    "Trade on the go with our fully-featured mobile app",
    "Real-time price alerts and notifications",
    "Secure biometric authentication",
    "Same powerful tools as the desktop version",
    "Quick deposit and withdrawal options",
]);
</script>

<style scoped>
.text-gradient {
    @apply bg-gradient-to-r from-[#F7CF06] to-transparent text-transparent bg-clip-text;
}



.animate-float {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>
