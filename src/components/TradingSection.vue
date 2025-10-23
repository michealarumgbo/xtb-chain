<template>
    <section class="py-20 bg-crypto-darkgray">
        <div class="container mx-auto px-4 md:px-6">
            <!-- Ticker Tape Widget -->
            <div class="mb-12 -mx-4 md:-mx-6">
                <div class="tradingview-widget-container" ref="tickerRef">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
            </div>

            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Live Crypto Markets</h2>
                <p class="text-crypto-gray">
                    Real-time cryptocurrency prices powered by TradingView
                </p>
            </div>

            <!-- Market Overview Widget -->
            <div class="glass-card rounded-xl overflow-hidden p-4">
                <div class="tradingview-widget-container" ref="marketOverviewRef">
                    <div class="tradingview-widget-container__widget"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tickerRef = ref(null);
const marketOverviewRef = ref(null);

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
});
</script>

<style scoped>
/* Optional custom styles */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>