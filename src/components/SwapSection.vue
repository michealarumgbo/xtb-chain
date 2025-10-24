<template>
    <section class="py-20 bg-[#1E1E22]">
        <div class="container mx-auto px-4 md:px-6">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- LEFT CONTENT -->
                <div>
                    <div
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121214] border border-white/10 text-sm font-medium text-[#F7CF06] mb-6">
                        <ArrowLeftRight class="h-4 w-4" />
                        Instant Swaps
                    </div>

                    <h2 class="text-4xl md:text-5xl font-bold mb-6">
                        Swap Crypto <span class="text-gradient">Instantly</span>
                    </h2>

                    <p class="text-[#8A8A9D] text-lg mb-8">
                        Exchange any cryptocurrency in seconds with the best rates and lowest fees. No hidden costs, no
                        delays.
                    </p>

                    <div class="space-y-6 mb-8">
                        <div class="flex items-start gap-4">
                            <div class="h-12 w-12 rounded-lg bg-[#F7CF06]/10 flex items-center justify-center shrink-0">
                                <Zap class="h-6 w-6 text-[#F7CF06]" />
                            </div>
                            <div>
                                <h4 class="font-bold mb-2">Lightning Fast</h4>
                                <p class="text-[#8A8A9D]">Swaps complete in under 5 seconds</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="h-12 w-12 rounded-lg bg-[#F7CF06]/10 flex items-center justify-center shrink-0">
                                <DollarSign class="h-6 w-6 text-[#F7CF06]" />
                            </div>
                            <div>
                                <h4 class="font-bold mb-2">Best Rates</h4>
                                <p class="text-[#8A8A9D]">Competitive pricing with minimal slippage</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="h-12 w-12 rounded-lg bg-[#F7CF06]/10 flex items-center justify-center shrink-0">
                                <Shield class="h-6 w-6 text-[#F7CF06]" />
                            </div>
                            <div>
                                <h4 class="font-bold mb-2">Secure & Reliable</h4>
                                <p class="text-[#8A8A9D]">Advanced encryption and multi-layer security</p>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" class="bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] font-semibold px-8">
                        Start Swapping
                    </Button>
                </div>

                <!-- RIGHT CONTENT (SWAP CARD) -->
                <div class="glass-card hidden md:block rounded-2xl p-8">
                    <h3 class="text-2xl font-bold mb-6 text-center">Quick Swap</h3>

                    <div class="space-y-4">
                        <!-- You Send -->
                        <div class="bg-[#121214] rounded-xl p-6">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-[#8A8A9D]">You Send</span>
                                <span class="text-sm text-[#8A8A9D]">Balance: 2.456</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                                        ₿
                                    </div>
                                    <span class="font-bold text-lg">BTC</span>
                                </div>
                                <input type="text" placeholder="0.00" v-model="sendAmount"
                                    class="flex-1 bg-transparent text-right text-2xl font-bold outline-none" />
                            </div>
                        </div>

                        <!-- Swap Icon -->
                        <div class="flex justify-center">
                            <div class="h-10 w-10 rounded-full bg-[#F7CF06] flex items-center justify-center">
                                <ArrowLeftRight class="h-5 w-5 text-[#121214]" />
                            </div>
                        </div>

                        <!-- You Receive -->
                        <div class="bg-[#121214] rounded-xl p-6">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-sm text-[#8A8A9D]">You Receive</span>
                                <span class="text-sm text-[#8A8A9D]">Balance: 12.845</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">
                                        Ξ
                                    </div>
                                    <span class="font-bold text-lg">ETH</span>
                                </div>
                                <input type="text" placeholder="0.00" v-model="receiveAmount"
                                    class="flex-1 bg-transparent text-right text-2xl font-bold outline-none" />
                            </div>
                        </div>

                        <!-- Exchange Info -->
                        <div class="bg-[#1E1E22] rounded-lg p-4 space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-[#8A8A9D]">Exchange Rate</span>
                                <span>1 BTC = 18.7 ETH</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-[#8A8A9D]">Fee</span>
                                <span class="text-green-500">0.1%</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-[#8A8A9D]">Estimated Time</span>
                                <span>~3 seconds</span>
                            </div>
                        </div>

                        <Button class="w-full bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] font-bold py-6 text-lg">
                            Swap Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { ArrowLeftRight, Zap, Shield, DollarSign } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

const sendAmount = ref("0.5");
const receiveAmount = ref("9.35");
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
}
</style>
