<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(option, index) in investmentOptions" :key="index"
            class="glass-card rounded-xl p-8 text-center hover:bg-white/5 transition-all duration-300">
            <div class="h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6" :class="option.bgColor">
                <i :class="['text-3xl', option.iconColor, option.icon]"></i>
            </div>

            <h3 class="text-2xl font-bold mb-4">{{ option.title }}</h3>
            <p class="text-[#8A8A9D] mb-6">{{ option.description }}</p>

            <div class="space-y-3 mb-6">
                <div v-for="(detail, idx) in option.details" :key="idx" class="flex justify-between">
                    <span class="text-[#8A8A9D]">{{ detail.label }}</span>
                    <span class="font-semibold">{{ detail.value }}</span>
                </div>
            </div>

            <button
                class="w-full bg-transparent border border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214] font-medium py-3 rounded-lg transition-all">
                Learn More
            </button>
        </div>
    </div>
</template>

<script setup>
const investmentOptions = [
    {
        title: "Staking",
        icon: "fas fa-lock",
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-500",
        description:
            "Earn rewards by participating in network security and validation of Proof-of-Stake blockchains.",
        details: [
            { label: "Avg. APY", value: "5-15%" },
            { label: "Risk Level", value: "Low" },
            { label: "Lock Period", value: "7-90 days" },
        ],
    },
    {
        title: "Savings",
        icon: "fas fa-piggy-bank",
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-500",
        description:
            "Earn interest on your idle crypto assets with flexible terms and daily compounding.",
        details: [
            { label: "Avg. APY", value: "3-8%" },
            { label: "Risk Level", value: "Very Low" },
            { label: "Flexibility", value: "Daily Redemption" },
        ],
    },
    {
        title: "Yield Farming",
        icon: "fas fa-seedling",
        bgColor: "bg-green-500/20",
        iconColor: "text-green-500",
        description:
            "Provide liquidity to DeFi protocols and earn high yields with liquidity mining rewards.",
        details: [
            { label: "Avg. APY", value: "15-50%" },
            { label: "Risk Level", value: "High" },
            { label: "Impermanent Loss", value: "Possible" },
        ],
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
