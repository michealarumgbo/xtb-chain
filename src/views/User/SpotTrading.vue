<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <Navbar />

        <!-- Main Content -->
        <div class="flex-1">
            <!-- Hero Section -->
            <section class="py-27 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-3xl mx-auto mb-8">

                        <h1 class="text-4xl md:text-5xl font-bold mb-6">Trade Crypto <span
                                class="text-gradient">Instantly</span></h1>
                        <p class="text-[#8A8A9D] text-lg">Buy and sell cryptocurrencies at market prices with our
                            advanced spot trading platform.</p>
                    </div>
                </div>
            </section>

            <!-- Trading Interface -->
            <section class="py-12 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Trading Chart -->
                        <div class="lg:col-span-2">
                            <div class="glass-card rounded-xl overflow-hidden">
                                <div class="glass-card rounded-xl overflow-hidden" style="height: 600px;">
                                    <div ref="chartRef" class="tradingview-widget-container"
                                        style="height: 100%; width: 100%;">
                                        <div class="tradingview-widget-container__widget"
                                            style="height: calc(100% - 32px); width: 100%;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Trading Panel -->
                        <div class="space-y-6">
                            <!-- Buy/Sell Panel -->
                            <div class="glass-card rounded-xl p-6">
                                <div class="flex border-b border-white/10 mb-4">
                                    <button
                                        class="flex-1 py-3 font-semibold text-center border-b-2 border-[#F7CF06] text-[#F7CF06]">Buy</button>
                                    <button
                                        class="flex-1 py-3 font-semibold text-center text-[#8A8A9D] hover:text-white">Sell</button>
                                </div>

                                <div class="space-y-4">
                                    <div v-for="(input, index) in tradingInputs" :key="index">
                                        <div class="flex justify-between text-sm text-[#8A8A9D] mb-2">
                                            <span>{{ input.label }}</span>
                                            <span>{{ input.available }}</span>
                                        </div>
                                        <div class="relative">
                                            <input type="text" :placeholder="input.placeholder"
                                                class="w-full bg-[#121214] rounded-lg px-4 py-3 text-lg font-bold outline-none" />
                                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                <span class="text-sm font-semibold">{{ input.unit }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex space-x-2">
                                        <button v-for="percent in [25, 50, 75, 100]" :key="percent"
                                            class="flex-1 py-2 bg-[#121214] hover:bg-[#1E1E22] rounded text-sm">{{
                                                percent }}%</button>
                                    </div>

                                    <button
                                        class="w-full bg-[#F7CF06] hover:bg-yellow-500 text-black font-bold py-4 rounded-lg mt-4">
                                        Buy BTC
                                    </button>
                                </div>
                            </div>

                            <!-- Order Book -->
                            <div class="glass-card rounded-xl p-6">
                                <h3 class="text-lg font-bold mb-4">Order Book</h3>
                                <div class="space-y-2">
                                    <div v-for="(order, index) in orderBook" :key="index"
                                        class="flex justify-between text-sm"
                                        :class="order.highlight ? 'text-center py-2' : ''">
                                        <template v-if="order.highlight">
                                            <span class="text-lg font-bold">{{ order.price }}</span>
                                        </template>
                                        <template v-else>
                                            <span :class="order.type === 'buy' ? 'text-green-500' : 'text-red-500'">{{
                                                order.price }}</span>
                                            <span>{{ order.amount }}</span>
                                            <span class="text-[#8A8A9D]">{{ order.volume }}</span>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Market Pairs Section -->
            <section class="py-12 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-8">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Market <span class="text-gradient">Pairs</span>
                        </h2>
                        <p class="text-[#8A8A9D]">Trade with hundreds of cryptocurrency pairs</p>
                    </div>

                    <div class="glass-card rounded-xl overflow-hidden">
                        <div class="bg-[#121214] px-6 py-4 border-b border-white/10">
                            <div class="flex space-x-6">
                                <button v-for="(tab, index) in marketTabs" :key="index"
                                    :class="['font-semibold pb-2', tab.active ? 'text-[#F7CF06] border-b-2 border-[#F7CF06]' : 'text-[#8A8A9D] hover:text-white']">
                                    {{ tab.name }}
                                </button>
                            </div>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-[#121214]">
                                    <tr>
                                        <th class="text-left py-4 px-6 text-[#8A8A9D] font-medium">Pair</th>
                                        <th class="text-right py-4 px-6 text-[#8A8A9D] font-medium">Last Price</th>
                                        <th class="text-right py-4 px-6 text-[#8A8A9D] font-medium">24h Change</th>
                                        <th class="text-right py-4 px-6 text-[#8A8A9D] font-medium">24h Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(pair, index) in marketPairs" :key="index"
                                        :class="['border-b border-white/5 hover:bg-white/5 cursor-pointer', index === marketPairs.length - 1 ? '' : '']">
                                        <td class="py-4 px-6">
                                            <div class="flex items-center">
                                                <div
                                                    :class="['h-8 w-8 rounded-full flex items-center justify-center mr-3', pair.bgColor]">
                                                    <span class="font-bold text-white">{{ pair.symbol[0] }}</span>
                                                </div>
                                                <div>
                                                    <span class="font-semibold">{{ pair.symbol }}/USDT</span>
                                                    <p class="text-xs text-[#8A8A9D]">{{ pair.name }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 text-right font-semibold">{{ pair.price }}</td>
                                        <td
                                            :class="['py-4 px-6 text-right font-semibold', pair.change >= 0 ? 'text-green-500' : 'text-red-500']">
                                            {{ pair.change >= 0 ? '+' : '' }}{{ pair.change }}%
                                        </td>
                                        <td class="py-4 px-6 text-right text-[#8A8A9D]">{{ pair.volume }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="py-12 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Trade with <span
                                class="text-gradient">XTBChain</span>
                        </h2>
                        <p class="text-[#8A8A9D]">Experience the difference with our cutting-edge spot trading platform
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(feature, index) in features" :key="index"
                            class="glass-card rounded-lg p-6 feature-card">
                            <div class="h-16 w-16 rounded-full bg-[#1E1E22] flex items-center justify-center mb-6">
                                <i :class="feature.icon" class="text-2xl text-[#F7CF06]"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
                            <p class="text-[#8A8A9D]">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer Section -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from "vue";

const chartRef = ref(null);

onMounted(() => {
    if (chartRef.value && !chartRef.value.querySelector("script")) {
        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "BINANCE:BTCUSDT",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            backgroundColor: "rgba(19, 23, 34, 0)",
            gridColor: "rgba(255, 255, 255, 0.06)",
            allow_symbol_change: true,
            save_image: false,
            calendar: false,
            hide_top_toolbar: false,
            hide_legend: false,
            support_host: "https://www.tradingview.com",
        });
        chartRef.value.appendChild(script);
    }
});

const chartPeriods = ["1H", "1D", "1W", "1M"];

const tradingInputs = [
    { label: "Available", available: "2,450.00 USDT", placeholder: "0.00", unit: "USDT" },
    { label: "Price", available: "$43,578.92", placeholder: "0.00", unit: "USDT" },
    { label: "Amount", available: "~0.0000 BTC", placeholder: "0.00", unit: "BTC" },
];

const orderBook = [
    { price: "43,572.12", amount: "0.245", volume: "10.67K", type: "sell" },
    { price: "43,571.85", amount: "0.189", volume: "8.24K", type: "sell" },
    { price: "43,570.43", amount: "0.432", volume: "18.82K", type: "sell" },
    { price: "43,578.92", highlight: true },
    { price: "43,580.15", amount: "0.321", volume: "14.01K", type: "buy" },
    { price: "43,581.27", amount: "0.456", volume: "19.89K", type: "buy" },
    { price: "43,582.50", amount: "0.298", volume: "13.00K", type: "buy" },
];

const marketTabs = [
    { name: "All", active: true },
    { name: "USDT", active: false },
    { name: "BTC", active: false },
    { name: "ETH", active: false },
    { name: "BNB", active: false },
];

const marketPairs = [
    { symbol: "BTC", name: "Bitcoin", price: "$43,578.92", change: 2.34, volume: "$8.2B", bgColor: "bg-orange-500" },
    { symbol: "ETH", name: "Ethereum", price: "$2,345.67", change: 1.56, volume: "$4.5B", bgColor: "bg-purple-500" },
    { symbol: "SOL", name: "Solana", price: "$105.82", change: -0.87, volume: "$1.2B", bgColor: "bg-cyan-500" },
    { symbol: "BNB", name: "BNB", price: "$312.45", change: 0.92, volume: "$800M", bgColor: "bg-yellow-500" },
    { symbol: "XRP", name: "Ripple", price: "$0.6234", change: 3.21, volume: "$650M", bgColor: "bg-blue-500" },
];

const features = [
    { icon: "fas fa-bolt", title: "Lightning Fast Execution", description: "Execute trades in milliseconds with our high-performance matching engine." },
    { icon: "fas fa-shield-alt", title: "Advanced Security", description: "Your funds are protected with multi-layer security and cold storage." },
    { icon: "fas fa-percentage", title: "Low Trading Fees", description: "Enjoy some of the lowest trading fees in the industry with volume-based discounts." },
];
</script>

<style scoped>
body {
    background-color: #121214;
    color: white;
    font-family: ui-sans-serif, system-ui, sans-serif;
}

/* Glass Cards */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Text Gradient */
.text-gradient {
    background: linear-gradient(to right, #f7cf06, #facc15);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Navbar Blur */
.navbar-blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* Feature Card Hover */
.feature-card {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background-color: #121214;
}

::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: #8A8A9D;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #F7CF06;
}
</style>
