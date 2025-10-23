<template>
    <section class="py-20 bg-[#121214]">
        <div class="container mx-auto px-4 md:px-6">
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1E22] border border-white/10 text-sm font-medium text-[#F7CF06] mb-6">
                    <ActivityIcon class="h-4 w-4" />
                    Live Trading Feed
                </div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    See The Market <span class="text-gradient">In Action</span>
                </h2>
                <p class="text-[#8A8A9D] text-lg">
                    Watch real-time trades from our global community and stay updated with market movements.
                </p>
            </div>

            <!-- Stats Grid -->
            <div class="grid md:grid-cols-4 gap-6 mb-12">
                <div class="glass-card rounded-xl p-6 text-center">
                    <div class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#F7CF06]/10 mb-4">
                        <ActivityIcon class="h-6 w-6 text-[#F7CF06]" />
                    </div>
                    <p class="text-3xl font-bold mb-2">1,247</p>
                    <p class="text-[#8A8A9D] text-sm">Trades per Minute</p>
                </div>

                <div class="glass-card rounded-xl p-6 text-center">
                    <div class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-500/10 mb-4">
                        <TrendingUpIcon class="h-6 w-6 text-green-500" />
                    </div>
                    <p class="text-3xl font-bold mb-2">$2.4M</p>
                    <p class="text-[#8A8A9D] text-sm">Volume (Last Hour)</p>
                </div>

                <div class="glass-card rounded-xl p-6 text-center">
                    <div class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/10 mb-4">
                        <UsersIcon class="h-6 w-6 text-blue-500" />
                    </div>
                    <p class="text-3xl font-bold mb-2">8,942</p>
                    <p class="text-[#8A8A9D] text-sm">Active Traders</p>
                </div>

                <div class="glass-card rounded-xl p-6 text-center">
                    <div class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-500/10 mb-4">
                        <ZapIcon class="h-6 w-6 text-purple-500" />
                    </div>
                    <p class="text-3xl font-bold mb-2">0.03s</p>
                    <p class="text-[#8A8A9D] text-sm">Avg Execution</p>
                </div>
            </div>

            <!-- TradingView Widget -->
            <div class="glass-card rounded-xl overflow-hidden">
                <div class="bg-[#1E1E22] px-6 py-4 border-b border-white/10">
                    <h3 class="text-xl font-bold">Live Trading Activity</h3>
                </div>
                <div ref="widgetRef" class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
            </div>

            <!-- Bottom Stats -->
            <div class="mt-12 glass-card rounded-xl p-8">
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <p class="text-4xl font-bold text-green-500 mb-2">24/7</p>
                        <p class="text-[#8A8A9D]">Always-On Trading</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-[#F7CF06] mb-2">99.9%</p>
                        <p class="text-[#8A8A9D]">Uptime Guarantee</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-blue-500 mb-2">&lt;1ms</p>
                        <p class="text-[#8A8A9D]">Latency</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
    ActivityIcon,
    TrendingUpIcon,
    UsersIcon,
    ZapIcon,
} from "lucide-vue-next";

const widgetRef = ref(null);

onMounted(() => {
    if (widgetRef.value && !widgetRef.value.querySelector("script")) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            feedMode: "all_symbols",
            isTransparent: true,
            displayMode: "adaptive",
            width: "100%",
            height: "550",
            colorTheme: "dark",
            locale: "en",
        });
        widgetRef.value.appendChild(script);
    }
});
</script>

<style scoped>
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
