<template>
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-bg">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                <!-- Left Section -->
                <div class="md:w-1/2 space-y-8 text-center md:text-left">
                    <div
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b3b3bc7] border border-white/10 text-sm font-medium text-[#F7CF06] animate-pulse-subtle">
                        <ZapIcon class="h-4 w-4" />
                        Trusted by 10M+ Traders Worldwide
                    </div>

                    <h1 class="text-5xl text-white md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                        Your Gateway to <br />
                        <span class="text-gradient">Advanced Crypto Trading</span>
                    </h1>

                    <p class="text-xl text-gray-500 max-w-2xl mx-auto md:mx-0 animate-fade-in-up">
                        Experience seamless trading with copy trading, automated bots, instant swaps, and earn
                        rewards through our referral program.
                    </p>

                    <div class="flex flex-wrap gap-4 pt-2 animate-fade-in-up">
                        <div class="flex items-center gap-2 text-gray-500">
                            <ShieldIcon class="h-5 w-5 text-[#F7CF06]" />
                            <span class="text-sm">Bank-Grade Security</span>
                        </div>
                        <div class="flex items-center gap-2 text-gray-500">
                            <TrendingUpIcon class="h-5 w-5 text-[#F7CF06]" />
                            <span class="text-sm">Real-Time Trading</span>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up">
                        <button
                            class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-10 py-4 text-lg rounded-lg flex items-center justify-center transition-all">
                            Start Trading Now
                            <ArrowRightIcon class="ml-2 h-5 w-5" />
                        </button>
                        <button
                            class="border border-white/20 hover:bg-white/5 text-white font-semibold px-10 py-4 text-lg rounded-lg flex items-center justify-center transition-all">
                            Explore Features
                        </button>
                    </div>

                    <div class="grid grid-cols-3 gap-6 pt-8 animate-fade-in">
                        <div class="flex flex-col items-center md:items-start">
                            <span class="text-3xl font-bold text-[#F7CF06]">$8.2B+</span>
                            <span class="text-sm text-gray-500">Daily Volume</span>
                        </div>
                        <div class="flex flex-col items-center md:items-start">
                            <span class="text-3xl font-bold text-[#F7CF06]">250+</span>
                            <span class="text-sm text-gray-500">Crypto Assets</span>
                        </div>
                        <div class="flex flex-col items-center md:items-start">
                            <span class="text-3xl font-bold text-[#F7CF06]">0.01%</span>
                            <span class="text-sm text-gray-500">Low Fees</span>
                        </div>
                    </div>
                </div>

                <!-- Right Section -->
                <div class="md:w-1/2 mt-12 md:mt-0 animate-float">
                    <div class="relative">
                        <!-- Chart SVG -->
                        <svg class="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="chart-line"
                                d="M0,150 C50,180 100,120 150,140 C200,160 250,80 300,100 C350,120 400,60"
                                stroke="#F7CF06" stroke-width="3" fill="none" />
                            <circle cx="150" cy="140" r="5" fill="#F7CF06" />
                            <circle cx="250" cy="80" r="5" fill="#F7CF06" />
                            <circle cx="350" cy="120" r="5" fill="#F7CF06" />
                            <circle cx="300" cy="100" r="5" fill="#F7CF06" />

                            <!-- Grid Lines -->
                            <line v-for="y in [50, 100, 150, 200, 250]" :key="y" :x1="0" :y1="y" :x2="400" :y2="y"
                                stroke="#2A2A2E" stroke-width="1" stroke-dasharray="5,5" />
                            <line v-for="x in [100, 200, 300]" :key="x" :x1="x" y1="0" :x2="x" y2="300" stroke="#2A2A2E"
                                stroke-width="1" stroke-dasharray="5,5" />
                        </svg>

                        <!-- Floating Bitcoin Card -->
                        <div class="absolute top-0 right-0 p-4 glass-card rounded-lg flex items-center space-x-3">
                            <div class="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12L10 17L20 7" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500">Bitcoin</p>
                                <p class="text-sm font-bold">$43,578.92</p>
                            </div>
                        </div>

                        <!-- Bottom Card -->
                        <div class="absolute bottom-0 left-0 p-4 glass-card rounded-lg">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                <span class="text-xs text-gray-500">Live Trading</span>
                            </div>
                            <p class="text-sm font-bold mt-1">BTC/USDT</p>
                            <p class="text-xs text-green-500">+3.27%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Background Elements -->
        <div class="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>
    </section>
</template>

<script setup>
import { ArrowRightIcon, TrendingUpIcon, ZapIcon, ShieldIcon } from "lucide-vue-next";
</script>

<style scoped>
.hero-bg {
    background: radial-gradient(circle at top left, #0c0c0f, #000);
}

.text-gradient {
    background: linear-gradient(to right, #f7cf06, #facc15);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
