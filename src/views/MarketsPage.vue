<template>
    <div class="min-h-screen flex flex-col bg-[#121214] text-white font-sans">
        <!-- Header -->
        <Navbar />

        <!-- Main -->
        <main class="flex-1 ">
            <!-- Hero Section -->
            <section class="py-23 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6 text-center">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">
                        Crypto <span class="text-gradient">Markets</span>
                    </h1>
                    <p class="text-[#8A8A9D] text-lg mb-8">
                        Track real-time cryptocurrency prices, market caps, and trading volumes.
                    </p>
                </div>
            </section>
            <!-- <TradingSection /> -->
            <section class="py-20 bg-crypto-darkgray">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Live Crypto Markets</h2>
                        <p class="text-crypto-gray">
                            Real-time cryptocurrency prices powered by TradingView
                        </p>
                    </div>
                    <!-- Ticker Tape Widget -->
                    <div class="mb-12 -mx-4 md:-mx-6">
                        <div class="tradingview-widget-container" ref="tickerRef">
                            <div class="tradingview-widget-container__widget"></div>
                        </div>
                    </div>



                    <!-- Market Overview Widget -->
                    <div class="glass-card rounded-xl overflow-hidden p-4">
                        <div class="tradingview-widget-container" ref="marketOverviewRef">
                            <div class="tradingview-widget-container__widget"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Market Table -->
            <section class="py-12 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">


                    <!-- Market Overview -->
                    <div class="mt-12 text-center">
                        <h3 class="text-2xl font-bold mb-6">Market Overview</h3>
                        <div class="glass-card rounded-xl overflow-hidden" style="height: 600px;">
                            <div ref="chartRef" class="tradingview-widget-container" style="height: 100%; width: 100%;">
                                <div class="tradingview-widget-container__widget"
                                    style="height: calc(100% - 32px); width: 100%;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Trending Coins -->
                    <div class="mt-12">
                        <h3 class="text-2xl font-bold mb-6">Trending Coins</h3>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div v-for="trend in trending" :key="trend.symbol"
                                class="glass-card rounded-lg p-4 text-center hover:bg-white/5 cursor-pointer">
                                <div class="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold"
                                    :class="trend.color">
                                    {{ trend.symbol[0] }}
                                </div>
                                <p class="font-semibold">{{ trend.symbol }}</p>
                                <p :class="trend.change > 0 ? 'text-green-500 text-sm' : 'text-red-500 text-sm'">
                                    {{ trend.change > 0 ? '+' : '' }}{{ trend.change }}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref, computed, onMounted } from "vue";
import TradingSection from "@/components/TradingSection.vue";

const tickerRef = ref(null);
const marketOverviewRef = ref(null);
const chartRef = ref(null);

onMounted(() => {
    // TradingView Ticker Tape Widget
    if (tickerRef.value && !tickerRef.value.querySelector("script")) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                { proName: "BINANCE:BTCUSDT", title: "Bitcoin" },
                { proName: "BINANCE:ETHUSDT", title: "Ethereum" },
                { proName: "BINANCE:SOLUSDT", title: "Solana" },
                { proName: "BINANCE:BNBUSDT", title: "BNB" },
                { proName: "BINANCE:XRPUSDT", title: "XRP" },
                { proName: "BINANCE:ADAUSDT", title: "Cardano" },
                { proName: "BINANCE:DOGEUSDT", title: "Dogecoin" },
            ],
            showSymbolLogo: true,
            isTransparent: true,
            displayMode: "adaptive",
            colorTheme: "dark",
            locale: "en",
        });
        tickerRef.value.appendChild(script);
    }

    // TradingView Market Overview Widget
    if (marketOverviewRef.value && !marketOverviewRef.value.querySelector("script")) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            colorTheme: "dark",
            dateRange: "1D",
            showChart: true,
            locale: "en",
            width: "100%",
            height: "600",
            largeChartUrl: "",
            isTransparent: true,
            showSymbolLogo: true,
            showFloatingTooltip: false,
            plotLineColorGrowing: "rgba(251, 191, 36, 1)",
            plotLineColorFalling: "rgba(251, 191, 36, 1)",
            gridLineColor: "rgba(240, 243, 250, 0.06)",
            scaleFontColor: "rgba(209, 212, 220, 1)",
            belowLineFillColorGrowing: "rgba(251, 191, 36, 0.12)",
            belowLineFillColorFalling: "rgba(251, 191, 36, 0.12)",
            belowLineFillColorGrowingBottom: "rgba(251, 191, 36, 0)",
            belowLineFillColorFallingBottom: "rgba(251, 191, 36, 0)",
            symbolActiveColor: "rgba(251, 191, 36, 0.12)",
            tabs: [
                {
                    title: "Crypto",
                    symbols: [
                        { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
                        { s: "BINANCE:ETHUSDT", d: "Ethereum" },
                        { s: "BINANCE:SOLUSDT", d: "Solana" },
                        { s: "BINANCE:BNBUSDT", d: "BNB" },
                        { s: "BINANCE:XRPUSDT", d: "XRP" },
                        { s: "BINANCE:ADAUSDT", d: "Cardano" },
                    ],
                    originalTitle: "Crypto",
                },
            ],
        });
        marketOverviewRef.value.appendChild(script);
    }

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



const marketStats = [
    { label: "Total Market Cap", value: "$1.68T", change: 2.34 },
    { label: "24h Volume", value: "$82.4B", change: 5.67 },
    { label: "BTC Dominance", value: "48.3%", change: -0.45 },
    { label: "ETH Dominance", value: "18.7%", change: 0.23 },
];

const coins = ref([
    { name: "Bitcoin", symbol: "BTC", price: "43,578.92", change24h: 2.34, marketCap: "852.4B", volume: "24.8B", weekChange: 8.5, color: "bg-orange-500" },
    { name: "Ethereum", symbol: "ETH", price: "2,345.67", change24h: 1.56, marketCap: "281.9B", volume: "12.3B", weekChange: 5.2, color: "bg-purple-500" },
    { name: "Tether", symbol: "USDT", price: "1.00", change24h: 0.0, marketCap: "95.3B", volume: "42.1B", weekChange: 0.0, color: "bg-green-500" },
    { name: "BNB", symbol: "BNB", price: "312.45", change24h: 0.92, marketCap: "48.2B", volume: "1.2B", weekChange: 3.7, color: "bg-yellow-500" },
    { name: "Solana", symbol: "SOL", price: "105.82", change24h: -0.87, marketCap: "45.8B", volume: "2.1B", weekChange: -2.3, color: "bg-cyan-500" },
    { name: "XRP", symbol: "XRP", price: "0.6234", change24h: 3.21, marketCap: "33.9B", volume: "1.8B", weekChange: 12.4, color: "bg-blue-500" },
]);

const search = ref("");
const filter = ref("All");

const filteredCoins = computed(() => {
    return coins.value.filter((coin) =>
        coin.name.toLowerCase().includes(search.value.toLowerCase())
    );
});

const trending = [
    { symbol: "ETH", change: 5.2, color: "bg-purple-500" },
    { symbol: "SOL", change: -2.1, color: "bg-cyan-500" },
    { symbol: "AVAX", change: 8.7, color: "bg-blue-500" },
    { symbol: "DOGE", change: 12.3, color: "bg-red-500" },
];

const footerLinks = [
    {
        title: "Products",
        links: [
            { text: "Markets", href: "/markets" },
            { text: "Trade", href: "/trade" },
            { text: "Derivatives", href: "/derivatives" },
            { text: "Earn", href: "/earn" },
            { text: "Learn", href: "/learn" },
        ],
    },
    {
        title: "Services",
        links: [
            { text: "Institutional", href: "#" },
            { text: "VIP Program", href: "#" },
            { text: "API", href: "#" },
            { text: "Referral Program", href: "#" },
            { text: "Affiliate", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { text: "Help Center", href: "#" },
            { text: "Fees", href: "#" },
            { text: "Security", href: "#" },
            { text: "Contact Us", href: "#" },
            { text: "Status", href: "#" },
        ],
    },
];
</script>

<style scoped>
body {
    background-color: #121214;
    color: white;
    font-family: ui-sans-serif, system-ui, sans-serif;
}

.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.text-gradient {
    background: linear-gradient(to right, #f7cf06, #facc15);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.navbar-blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.market-up {
    color: #00ff88;
}

.market-down {
    color: #ff4444;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background-color: #121214;
}

::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: #8a8a9d;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #f7cf06;
}
</style>
