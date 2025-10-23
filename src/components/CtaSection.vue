<template>
    <section class="py-20 bg-[#F7CF06] relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-transparent"></div>

        <div class="container mx-auto px-4 md:px-6 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-[#121214] mb-6">
                    Start Your Crypto Journey Today
                </h2>
                <p class="text-[#121214]/80 text-lg mb-8">
                    Join millions of traders worldwide and experience the power of XTBChain's advanced crypto trading
                    platform.
                </p>

                <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button size="lg" class="bg-[#121214] hover:bg-gray-800 text-white font-medium px-8">
                        Create Account
                    </Button>

                    <Button size="lg" variant="outline"
                        class="border-[#121214]/20 text-[#121214] hover:bg-[#121214]/10 font-medium px-8 flex items-center justify-center">
                        View Markets
                        <ArrowRight class="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>

        <!-- Background elements -->
        <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border-8 border-[#121214]/10"></div>
        <div class="absolute top-8 -right-8 w-32 h-32 rounded-full border-8 border-[#121214]/10"></div>
    </section>
</template>

<script setup>
import Button from "@/components/ui/Button.vue";
import { ArrowRight } from "lucide-vue-next"; // for Vue 3
</script>

<style scoped>
/* Optional custom styles (if any) */
</style>
