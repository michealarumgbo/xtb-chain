<template>
    <section class="py-20 bg-[#121214]">
        <div class="container mx-auto px-4 md:px-6">
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1E22] border border-white/10 text-sm font-medium text-[#F7CF06] mb-6">
                    <Bot class="h-4 w-4" />
                    Automated Trading
                </div>

                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    AI-Powered <span class="text-gradient">Trading Bots</span>
                </h2>
                <p class="text-[#8A8A9D] text-lg">
                    Let advanced algorithms trade 24/7 while you sleep. No coding required
                    — just select your strategy and watch it work.
                </p>
            </div>

            <!-- Bot Strategy Cards -->
            <div class="grid md:grid-cols-3 gap-6 mb-16">
                <div v-for="(bot, index) in botStrategies" :key="index"
                    class="glass-card rounded-xl p-8 hover:border-[#F7CF06]/50 transition-all duration-300">
                    <div class="text-5xl mb-4">{{ bot.icon }}</div>
                    <h3 class="text-2xl font-bold mb-3">{{ bot.name }}</h3>
                    <p class="text-[#8A8A9D] mb-6">{{ bot.description }}</p>

                    <div class="flex items-center justify-between mb-6">
                        <span class="text-sm text-[#8A8A9D]">Avg. Performance</span>
                        <span class="text-green-500 font-bold text-lg">
                            {{ bot.performance }}
                        </span>
                    </div>

                    <Button variant="outline"
                        class="w-full border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214]">
                        Activate Bot
                    </Button>
                </div>
            </div>

            <!-- Why Use Bots Section -->
            <div class="glass-card rounded-xl p-8 md:p-12">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 class="text-3xl font-bold mb-6">Why Use Trading Bots?</h3>

                        <div class="space-y-6">
                            <!-- 24/7 Trading -->
                            <div class="flex items-start gap-4">
                                <div
                                    class="h-12 w-12 rounded-lg bg-[#F7CF06]/10 flex items-center justify-center flex-shrink-0">
                                    <Zap class="h-6 w-6 text-[#F7CF06]" />
                                </div>
                                <div>
                                    <h4 class="font-bold mb-2">24/7 Trading</h4>
                                    <p class="text-[#8A8A9D]">
                                        Never miss an opportunity with round-the-clock automated
                                        trading.
                                    </p>
                                </div>
                            </div>

                            <!-- Emotion-Free Trading -->
                            <div class="flex items-start gap-4">
                                <div
                                    class="h-12 w-12 rounded-lg bg-[#F7CF06]/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp class="h-6 w-6 text-[#F7CF06]" />
                                </div>
                                <div>
                                    <h4 class="font-bold mb-2">Emotion-Free Trading</h4>
                                    <p class="text-[#8A8A9D]">
                                        Remove emotional decisions and stick to your strategy.
                                    </p>
                                </div>
                            </div>

                            <!-- Customizable -->
                            <div class="flex items-start gap-4">
                                <div
                                    class="h-12 w-12 rounded-lg bg-[#F7CF06]/10 flex items-center justify-center flex-shrink-0">
                                    <Settings class="h-6 w-6 text-[#F7CF06]" />
                                </div>
                                <div>
                                    <h4 class="font-bold mb-2">Fully Customizable</h4>
                                    <p class="text-[#8A8A9D]">
                                        Adjust parameters to match your risk tolerance and goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stats Card -->
                    <div class="glass-card rounded-lg p-8 bg-[#1E1E22]">
                        <h4 class="text-xl font-bold mb-6">Bot Performance Stats</h4>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-[#8A8A9D]">Active Bots</span>
                                <span class="text-2xl font-bold">12,458</span>
                            </div>
                            <div class="w-full h-px bg-white/10"></div>

                            <div class="flex items-center justify-between">
                                <span class="text-[#8A8A9D]">Total Profit Generated</span>
                                <span class="text-2xl font-bold text-green-500">$42.8M</span>
                            </div>
                            <div class="w-full h-px bg-white/10"></div>

                            <div class="flex items-center justify-between">
                                <span class="text-[#8A8A9D]">Success Rate</span>
                                <span class="text-2xl font-bold text-[#F7CF06]">87%</span>
                            </div>
                        </div>

                        <Button class="w-full mt-8 bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] font-semibold">
                            Create Your Bot
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { Bot, Zap, TrendingUp, Settings } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const botStrategies = ref([
    {
        name: "Grid Trading Bot",
        description:
            "Profit from market volatility with automated buy/sell orders",
        icon: "📊",
        performance: "+142%",
    },
    {
        name: "DCA Bot",
        description:
            "Dollar-cost averaging strategy for long-term investing",
        icon: "📈",
        performance: "+98%",
    },
    {
        name: "Arbitrage Bot",
        description:
            "Exploit price differences across multiple exchanges",
        icon: "⚡",
        performance: "+215%",
    },
]);
</script>

<style scoped>
/* .text-gradient {
    @apply bg-gradient-to-r from-[#F7CF06] to-transparent text-transparent bg-clip-text;
}


.glass-card {
    @apply bg-white/5 backdrop-blur-lg border border-white/10;
} */
</style>
