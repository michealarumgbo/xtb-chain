<template>
    <section class="py-20 bg-[#1E1E22]">
        <div class="container mx-auto px-4 md:px-6">
            <!-- Header -->
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121214] border border-white/10 text-sm font-medium text-[#F7CF06] mb-6">
                    <Gift class="h-4 w-4" />
                    Referral Program
                </div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    Earn While You <span class="text-gradient">Share</span>
                </h2>
                <p class="text-[#8A8A9D] text-lg">
                    Invite friends and earn up to 50% commission on their trading fees.
                    Unlimited earnings potential!
                </p>
            </div>

            <!-- How it works & Stats -->
            <div class="glass-card rounded-2xl p-8 md:p-12 mb-12">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <!-- Steps -->
                    <div>
                        <h3 class="text-3xl font-bold mb-8">How It Works</h3>
                        <div class="space-y-6">
                            <div v-for="(step, index) in steps" :key="index" class="flex gap-4">
                                <div
                                    class="h-12 w-12 rounded-full bg-[#F7CF06] flex items-center justify-center shrink-0 font-bold text-[#121214]">
                                    {{ index + 1 }}
                                </div>
                                <div>
                                    <h4 class="font-bold mb-2">{{ step.title }}</h4>
                                    <p class="text-[#8A8A9D]">{{ step.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Stats -->
                    <div class="bg-[#121214] hidden md:block rounded-xl p-8">
                        <h4 class="text-xl  font-bold mb-6">Your Referral Stats</h4>
                        <div class="space-y-6">
                            <div v-for="(stat, index) in stats" :key="index">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-[#8A8A9D]">{{ stat.label }}</span>
                                    <span class="text-3xl font-bold" :class="stat.color ? stat.color : ''">
                                        {{ stat.value }}
                                    </span>
                                </div>
                                <div class="w-full h-2 bg-[#1E1E22] rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" :class="stat.barColor"
                                        :style="{ width: stat.width }"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Referral link -->
                        <div class="mt-8 p-4 bg-[#1E1E22] rounded-lg">
                            <p class="text-sm text-[#8A8A9D] mb-2">Your Referral Link</p>
                            <div class="flex gap-2">
                                <input type="text" v-model="refLink" readonly
                                    class="flex-1 bg-[#121214] px-4 py-3 rounded-lg outline-none text-sm" />
                                <button @click="copyToClipboard"
                                    class="bg-[#F7CF06] hover:bg-yellow-500 text-[#121214] px-4 py-3 rounded-lg flex items-center justify-center">
                                    <Share2 class="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feature Cards -->
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(feature, index) in features" :key="index" class="glass-card rounded-xl p-8 text-center">
                    <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#F7CF06]/10 mb-4">
                        <component :is="feature.icon" class="h-8 w-8 text-[#F7CF06]" />
                    </div>
                    <h3 class="text-2xl font-bold mb-2">{{ feature.title }}</h3>
                    <p class="text-[#8A8A9D]">{{ feature.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import {
    Gift,
    Users,
    DollarSign,
    Share2
} from "lucide-vue-next";

const refLink = ref("xtbchain.com/ref/XTB47923");

const steps = [
    {
        title: "Share Your Link",
        text: "Copy your unique referral link and share with friends"
    },
    {
        title: "Friends Sign Up",
        text: "They register using your link and start trading"
    },
    {
        title: "Earn Commission",
        text: "Get up to 50% of their trading fees forever"
    }
];

const stats = [
    {
        label: "Total Referrals",
        value: "47",
        width: "75%",
        barColor: "bg-[#F7CF06]"
    },
    {
        label: "Total Earnings",
        value: "$3,845",
        width: "60%",
        barColor: "bg-green-500",
        color: "text-green-500"
    },
    {
        label: "This Month",
        value: "$542",
        width: "45%",
        barColor: "bg-[#F7CF06]",
        color: "text-[#F7CF06]"
    }
];

const features = [
    {
        icon: DollarSign,
        title: "Up to 50%",
        text: "Commission on trading fees"
    },
    {
        icon: Users,
        title: "Unlimited",
        text: "Number of referrals"
    },
    {
        icon: Gift,
        title: "Lifetime",
        text: "Recurring earnings"
    }
];

const copyToClipboard = () => {
    navigator.clipboard.writeText(refLink.value);
    alert("Referral link copied!");
};
</script>
