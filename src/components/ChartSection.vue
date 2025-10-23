<template>
    <section class="py-20 bg-crypto-black">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Advanced Trading Charts
                </h2>
                <p class="text-crypto-gray">
                    Professional charting tools with real-time data and technical indicators
                </p>
            </div>

            <div class="glass-card rounded-xl overflow-hidden" style="height: 600px;">
                <div ref="chartRef" class="tradingview-widget-container" style="height: 100%; width: 100%;">
                    <div class="tradingview-widget-container__widget" style="height: calc(100% - 32px); width: 100%;">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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
</script>
<!-- 
<style scoped>
.glass-card {
    @apply bg-white/5 backdrop-blur-lg border border-white/10;
}
</style> -->
