<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(strategy, index) in strategies" :key="index" class="glass-card rounded-xl p-6">
            <div class="flex items-center mb-4">
                <div class="h-12 w-12 rounded-full flex items-center justify-center mr-4" :class="strategy.iconBg">
                    <i :class="[strategy.icon, strategy.iconColor, 'text-xl']"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold">{{ strategy.title }}</h3>
                    <p class="text-[#8A8A9D] text-sm">{{ strategy.subtitle }}</p>
                </div>
            </div>

            <p class="text-[#8A8A9D] mb-4">{{ strategy.description }}</p>

            <ul class="text-[#8A8A9D] space-y-2">
                <li v-for="(point, idx) in strategy.points" :key="idx" class="flex items-center">
                    <i class="fas fa-check text-green-500 mr-2 text-sm"></i>
                    <span>{{ point }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const strategies = [
    {
        title: "Diversification",
        subtitle: "Spread risk across multiple assets",
        description:
            "Don't put all your eggs in one basket. Allocate your funds across different earning products and cryptocurrencies to minimize risk while maximizing potential returns.",
        icon: "fas fa-balance-scale",
        iconColor: "text-purple-500",
        iconBg: "bg-purple-500/20",
        points: [
            "Mix staking, savings, and yield farming",
            "Diversify across different cryptocurrencies",
            "Use different lock periods",
        ],
    },
    {
        title: "Laddering",
        subtitle: "Stagger your investment terms",
        description:
            "Instead of locking all your funds for the same period, create a ladder with different maturity dates. This provides regular access to funds while maintaining higher yields.",
        icon: "fas fa-calendar-alt",
        iconColor: "text-blue-500",
        iconBg: "bg-blue-500/20",
        points: [
            "Stake portions for 30, 60, and 90 days",
            "Maintain liquidity while earning higher yields",
            "Reinvest maturing funds at current rates",
        ],
    },
    {
        title: "Compounding",
        subtitle: "Reinvest earnings for exponential growth",
        description:
            "Enable automatic compounding to reinvest your earnings. Over time, this creates exponential growth as you earn returns on both your principal and accumulated earnings.",
        icon: "fas fa-sync-alt",
        iconColor: "text-green-500",
        iconBg: "bg-green-500/20",
        points: [
            "Set earnings to auto-compound",
            "Choose products with daily compounding",
            "Monitor and adjust strategy periodically",
        ],
    },
    {
        title: "Risk Management",
        subtitle: "Protect your capital while earning",
        description:
            "Understand the risks associated with each earning product and allocate funds accordingly. Start with lower-risk options before exploring higher-yield opportunities.",
        icon: "fas fa-shield-alt",
        iconColor: "text-yellow-500",
        iconBg: "bg-yellow-500/20",
        points: [
            "Start with savings and staking products",
            "Research each cryptocurrency before staking",
            "Only invest what you can afford to lose",
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
