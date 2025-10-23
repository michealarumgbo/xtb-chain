<template>
    <div class="min-h-screen flex flex-col">
        <Navbar />
        <main class="flex-1">
            <HeroSection />
            <FeaturesSection />
            <TradingSection />
            <ChartSection />
            <CopyTradingSection />
            <BotTradingSection />
            <SwapSection />
            <SpotHoldingsSection />
            <ReferralSection />
            <LiveTradingSection />
            <AppSection />
            <CtaSection />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import TradingSection from "@/components/TradingSection.vue";
import ChartSection from "@/components/ChartSection.vue";
import CopyTradingSection from "@/components/CopyTradingSection.vue";
import BotTradingSection from "@/components/BotTradingSection.vue";
import SwapSection from "@/components/SwapSection.vue";
import SpotHoldingsSection from "@/components/SpotHoldingsSection.vue";
import ReferralSection from "@/components/ReferralSection.vue";
import LiveTradingSection from "@/components/LiveTradingSection.vue";
import AppSection from "@/components/AppSection.vue";
import CtaSection from "@/components/CtaSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* Optional: custom layout tweaks (not required) */
</style>
