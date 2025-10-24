<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div v-for="(step, index) in steps" :key="index" class="step-card glass-card rounded-xl p-6 text-center">
            <div
                class="h-16 w-16 rounded-full bg-[#F7CF06] flex items-center justify-center mx-auto mb-4 text-[#121214] font-bold text-xl">
                <i :class="['text-xl', step.icon]"></i>
            </div>

            <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
            <p class="text-[#8A8A9D]">{{ step.description }}</p>
        </div>
    </div>
</template>

<script setup>
const steps = [
    {
        title: "Create Account",
        description: "Sign up for XTBChain in under 2 minutes with just your email address.",
        icon: "fas fa-user-plus",
    },
    {
        title: "Verify Identity",
        description: "Complete KYC verification to access all earning products (takes 5-10 minutes).",
        icon: "fas fa-id-card",
    },
    {
        title: "Deposit Funds",
        description: "Transfer crypto from your wallet or purchase directly with fiat currency.",
        icon: "fas fa-wallet",
    },
    {
        title: "Start Earning",
        description: "Choose your preferred earning product and watch your assets grow.",
        icon: "fas fa-chart-line",
    },
];
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
