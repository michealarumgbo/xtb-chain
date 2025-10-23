<template>
    <section class="py-20 bg-[#1E1E22]">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121214] border border-white/10 text-sm font-medium text-[#F7CF06] mb-6">
                    <Copy class="h-4 w-4" />
                    Copy Trading
                </div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Mirror Top Traders' <span class="text-gradient">Success</span>
                </h2>
                <p class="text-[#8A8A9D] text-lg">
                    Copy the strategies of professional traders automatically. No experience needed - let experts trade
                    for you.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6 mb-12">
                <div v-for="(trader, index) in topTraders" :key="index"
                    class="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div class="flex items-center gap-4 mb-6">
                        <div
                            class="h-16 w-16 rounded-full bg-gradient-to-br from-[#F7CF06] to-yellow-600 flex items-center justify-center text-[#121214] font-bold text-xl">
                            {{ trader.avatar }}
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">{{ trader.name }}</h3>
                            <div class="flex items-center gap-2 text-sm text-[#8A8A9D]">
                                <Users class="h-4 w-4" />
                                <span>{{ trader.followers }} followers</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-[#8A8A9D]">ROI (30d)</span>
                            <span class="text-green-500 font-bold text-xl">{{ trader.roi }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-[#8A8A9D]">Win Rate</span>
                            <span class="font-semibold">{{ trader.winRate }}</span>
                        </div>
                    </div>

                    <Button class="w-full mt-6 bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] font-semibold">
                        Copy Trader
                    </Button>
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mt-16">
                <div class="text-center">
                    <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#F7CF06]/10 mb-4">
                        <Award class="h-8 w-8 text-[#F7CF06]" />
                    </div>
                    <h3 class="text-xl font-bold mb-2">Verified Traders</h3>
                    <p class="text-[#8A8A9D]">
                        All traders are verified and monitored for performance
                    </p>
                </div>
                <div class="text-center">
                    <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#F7CF06]/10 mb-4">
                        <TrendingUp class="h-8 w-8 text-[#F7CF06]" />
                    </div>
                    <h3 class="text-xl font-bold mb-2">Real-Time Copying</h3>
                    <p class="text-[#8A8A9D]">
                        Trades are copied instantly to your account
                    </p>
                </div>
                <div class="text-center">
                    <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#F7CF06]/10 mb-4">
                        <Users class="h-8 w-8 text-[#F7CF06]" />
                    </div>
                    <h3 class="text-xl font-bold mb-2">Risk Management</h3>
                    <p class="text-[#8A8A9D]">
                        Set your own limits and stop-loss parameters
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Users, TrendingUp, Award, Copy } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue"

const topTraders = ref([
    { name: "CryptoMaster", roi: "+287%", followers: "12.5K", winRate: "89%", avatar: "CM" },
    { name: "BlockchainPro", roi: "+195%", followers: "8.3K", winRate: "82%", avatar: "BP" },
    { name: "TokenKing", roi: "+156%", followers: "6.8K", winRate: "78%", avatar: "TK" },
]);
</script>
