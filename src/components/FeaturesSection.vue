<template>
    <section class="py-20 bg-black">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Why Choose <span class="text-gradient">XTBChain</span>
                </h2>
                <p class="text-gray-500">
                    Experience the difference with our cutting-edge platform built for traders of all levels
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(feature, index) in features" :key="index" class="glass-card rounded-lg p-6 feature-card"
                    :style="{ animationDelay: `${index * 0.1}s` }">
                    <div class="bg-crypto-darkgray/70 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                        <component :is="feature.icon" class="h-8 w-8 text-crypto-yellow" />
                    </div>
                    <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
                    <p class="text-gray-500 text-sm">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    Activity,
    Shield,
    Zap,
    BarChart3,
    Smartphone,
    Globe
} from "lucide-vue-next";

const features = [
    {
        icon: BarChart3,
        title: "Advanced Trading Tools",
        description:
            "Access professional charting tools, technical indicators, and order types for precise trading."
    },
    {
        icon: Shield,
        title: "Bank-Level Security",
        description:
            "Your assets are protected with multi-layer security, cold storage, and 2FA authentication."
    },
    {
        icon: Zap,
        title: "High Performance",
        description:
            "Experience lightning-fast trades with our high-throughput matching engine."
    },
    {
        icon: Activity,
        title: "Competitive Fees",
        description:
            "Trade with some of the lowest fees in the industry and volume-based discounts."
    },
    {
        icon: Smartphone,
        title: "Mobile Trading",
        description:
            "Trade anytime, anywhere with our powerful mobile app for iOS and Android."
    },
    {
        icon: Globe,
        title: "Global Exchange",
        description:
            "Join millions of traders from over 100 countries on our worldwide platform."
    }
];
</script>

<style scoped>
/* Optional animation or card effects */
.feature-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
