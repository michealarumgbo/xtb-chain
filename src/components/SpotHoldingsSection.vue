<template>
    <section class="py-20 bg-[#121214]">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1E22] border border-white/10 text-sm font-medium text-[#F7CF06] mb-6">
                    <Wallet class="h-4 w-4" />
                    Spot Holdings
                </div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Manage Your <span class="text-gradient">Portfolio</span>
                </h2>
                <p class="text-[#8A8A9D] text-lg">
                    Track all your crypto assets in one place with real-time valuation and performance analytics.
                </p>
            </div>

            <div class="glass-card rounded-2xl p-8 mb-8">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                    <div>
                        <p class="text-[#8A8A9D] mb-2">Total Portfolio Value</p>
                        <h3 class="text-5xl font-bold text-[#F7CF06]">$95,069.67</h3>
                        <p class="text-green-500 text-lg mt-2 flex items-center gap-2">
                            <TrendingUp class="h-5 w-5" />
                            +$8,453.21 (9.76%) Today
                        </p>
                    </div>
                    <div class="flex gap-4 mt-6 md:mt-0">
                        <Button class="bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] font-semibold">
                            Deposit
                        </Button>
                        <Button variant="outline" class="border-white/20 hover:bg-white/5">
                            Withdraw
                        </Button>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div class="bg-[#1E1E22] rounded-lg p-6">
                        <div class="flex items-center gap-3 mb-2">
                            <Wallet class="h-5 w-5 text-[#F7CF06]" />
                            <span class="text-[#8A8A9D]">Available Balance</span>
                        </div>
                        <p class="text-2xl font-bold">$15,250.00</p>
                    </div>

                    <div class="bg-[#1E1E22] rounded-lg p-6">
                        <div class="flex items-center gap-3 mb-2">
                            <PieChart class="h-5 w-5 text-[#F7CF06]" />
                            <span class="text-[#8A8A9D]">Invested</span>
                        </div>
                        <p class="text-2xl font-bold">$79,819.67</p>
                    </div>

                    <div class="bg-[#1E1E22] rounded-lg p-6">
                        <div class="flex items-center gap-3 mb-2">
                            <TrendingUp class="h-5 w-5 text-[#F7CF06]" />
                            <span class="text-[#8A8A9D]">Total Profit</span>
                        </div>
                        <p class="text-2xl font-bold text-green-500">+$18,645.23</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center justify-between pb-4 border-b border-white/10">
                        <h4 class="font-bold text-lg">Your Assets</h4>
                        <Button variant="ghost" size="sm" class="text-[#8A8A9D] hover:text-white">
                            <Eye class="h-4 w-4 mr-2" />
                            View All
                        </Button>
                    </div>

                    <div v-for="(holding, index) in holdings" :key="index"
                        class="flex items-center justify-between p-4 rounded-lg hover:bg-[#1E1E22] transition-colors">
                        <div class="flex items-center gap-4">
                            <div class="h-12 w-12 rounded-full flex items-center justify-center font-bold"
                                :class="holding.color">
                                {{ holding.symbol.charAt(0) }}
                            </div>
                            <div>
                                <p class="font-bold">{{ holding.symbol }}</p>
                                <p class="text-sm text-[#8A8A9D]">{{ holding.name }}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="font-bold">{{ holding.amount }}</p>
                            <p class="text-sm text-[#8A8A9D]">{{ holding.value }}</p>
                        </div>
                        <div class="text-right min-w-[80px]">
                            <span class="font-semibold"
                                :class="holding.change.startsWith('+') ? 'text-green-500' : 'text-[#8A8A9D]'">
                                {{ holding.change }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { Wallet, TrendingUp, PieChart, Eye } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const holdings = ref([
    { symbol: "BTC", name: "Bitcoin", amount: "0.5843", value: "$25,450.32", change: "+12.5%", color: "bg-orange-500" },
    { symbol: "ETH", name: "Ethereum", amount: "12.345", value: "$28,385.20", change: "+8.3%", color: "bg-purple-500" },
    { symbol: "SOL", name: "Solana", amount: "245.67", value: "$25,984.15", change: "+15.7%", color: "bg-cyan-500" },
    { symbol: "USDT", name: "Tether", amount: "15,250", value: "$15,250.00", change: "0.0%", color: "bg-green-500" },
]);
</script>

<style scoped>
/* Optional — keep for styling transitions or extra tweaks */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
}
</style>
