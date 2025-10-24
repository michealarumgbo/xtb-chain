<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <Navbar />

        <!-- Main Content -->
        <main class="flex-1 pt-24">
            <!-- Hero Section -->
            <section class="py-12 hero-bg overflow-hidden relative">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                        <!-- Left Content -->
                        <div class="md:w-1/2 space-y-6 text-center md:text-left">
                            <div
                                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b3b3bc7] border border-white/10 text-sm font-medium text-[#F7CF06]">
                                <i class="fas fa-chart-line"></i> Professional Trading Platform
                            </div>
                            <h1 class="text-4xl md:text-5xl font-bold leading-tight">Trade Crypto with <span
                                    class="text-gradient">Confidence</span></h1>
                            <p class="text-lg text-[#8A8A9D] max-w-2xl mx-auto md:mx-0">Experience our intuitive trading
                                platform with advanced tools, lightning-fast execution, and institutional-grade
                                security.</p>

                            <div class="flex flex-col sm:flex-row gap-4 pt-6">
                                <button
                                    class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg rounded-lg flex items-center justify-center transition-all button-hover-effect"
                                    @click="onPrimaryCta">
                                    Start Trading Now
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                                <button
                                    class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-3 text-lg rounded-lg flex items-center justify-center transition-all"
                                    @click="onDemo">
                                    Try Demo
                                </button>
                            </div>

                            <div class="grid grid-cols-3 gap-6 pt-8">
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">500+</span>
                                    <span class="text-sm text-[#8A8A9D]">Trading Pairs</span>
                                </div>
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">$42B+</span>
                                    <span class="text-sm text-[#8A8A9D]">Daily Volume</span>
                                </div>
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">0.02%</span>
                                    <span class="text-sm text-[#8A8A9D]">Trading Fees</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content - Phone Mockup -->
                        <div class="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-float">
                            <div class="phone-mockup">
                                <div class="phone-notch"></div>
                                <div class="phone-screen">
                                    <div class="phone-content">
                                        <!-- Phone Header -->
                                        <div class="phone-header">
                                            <div class="flex justify-between items-center">
                                                <div>
                                                    <h2 class="text-lg font-bold">{{ phoneHeader.pair }}</h2>
                                                    <p class="text-sm text-[#8A8A9D]">{{ phoneHeader.name }}</p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-xl font-bold">{{ phoneHeader.price }}</p>
                                                    <p
                                                        :class="['text-sm', phoneHeader.priceChange.startsWith('+') ? 'market-up' : 'market-down']">
                                                        {{ phoneHeader.priceChange }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Phone Body -->
                                        <div class="phone-body">
                                            <!-- Chart Placeholder -->
                                            <div class="chart-placeholder">
                                                <div class="text-center">
                                                    <i class="fas fa-chart-line text-3xl text-[#F7CF06] mb-2"></i>
                                                    <p class="text-[#8A8A9D] text-sm">Live Trading Chart</p>
                                                </div>
                                            </div>

                                            <!-- Trading Stats -->
                                            <div class="grid grid-cols-2 gap-4 mb-4">
                                                <div class="bg-[#1a1a1e] p-3 rounded-lg">
                                                    <p class="text-[#8A8A9D] text-xs">24h High</p>
                                                    <p class="font-semibold">{{ phoneHeader.high }}</p>
                                                </div>
                                                <div class="bg-[#1a1a1e] p-3 rounded-lg">
                                                    <p class="text-[#8A8A9D] text-xs">24h Low</p>
                                                    <p class="font-semibold">{{ phoneHeader.low }}</p>
                                                </div>
                                            </div>

                                            <!-- Order Book -->
                                            <div class="mb-4">
                                                <h3 class="text-sm font-semibold mb-2">Order Book</h3>
                                                <div class="order-book">
                                                    <div v-for="(row, idx) in orderBook" :key="idx" class="order-row"
                                                        :class="{ 'text-center py-1 font-bold text-lg': row.center }">
                                                        <template v-if="!row.center">
                                                            <span
                                                                :class="[row.type === 'sell' ? 'text-red-500 text-sm' : 'text-green-500 text-sm']">{{
                                                                    row.price }}</span>
                                                            <span class="text-sm">{{ row.amount }}</span>
                                                        </template>
                                                        <template v-else>
                                                            <span>{{ row.price }}</span>
                                                        </template>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Trade Buttons -->
                                            <div class="grid grid-cols-2 gap-3">
                                                <button
                                                    class="trade-button bg-green-500/20 text-green-500 border border-green-500/30"
                                                    @click="onBuy">
                                                    Buy BTC
                                                </button>
                                                <button
                                                    class="trade-button bg-red-500/20 text-red-500 border border-red-500/30"
                                                    @click="onSell">
                                                    Sell BTC
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Phone Footer -->
                                        <div class="phone-footer">
                                            <div class="phone-nav-item"><i class="fas fa-home"></i><span>Home</span>
                                            </div>
                                            <div class="phone-nav-item active"><i
                                                    class="fas fa-chart-line"></i><span>Trade</span></div>
                                            <div class="phone-nav-item"><i class="fas fa-wallet"></i><span>Wallet</span>
                                            </div>
                                            <div class="phone-nav-item"><i class="fas fa-user"></i><span>Account</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Background Elements -->
                <div class="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>
                <div class="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>
            </section>

            <!-- Features Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Trade with <span
                                class="text-gradient">XTBChain</span>?
                        </h2>
                        <p class="text-[#8A8A9D]">Experience the power of professional trading with our advanced
                            platform</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(f, i) in features" :key="i" class="glass-card rounded-xl p-6 feature-card">
                            <div class="h-16 w-16 rounded-full bg-[#1E1E22] flex items-center justify-center mb-6">
                                <i :class="f.icon + ' text-2xl text-[#F7CF06]'"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-3">{{ f.title }}</h3>
                            <p class="text-[#8A8A9D]">{{ f.text }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Trading Pairs Section -->
            <section class="py-16 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Popular <span
                                class="text-gradient">Trading</span> Pairs
                        </h2>
                        <p class="text-[#8A8A9D]">Trade the most popular cryptocurrency pairs with deep liquidity</p>
                    </div>

                    <div class="glass-card rounded-xl overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="text-left text-[#8A8A9D] text-sm border-b border-white/10">
                                        <th class="py-4 px-6">Pair</th>
                                        <th class="py-4 px-6">Last Price</th>
                                        <th class="py-4 px-6">24h Change</th>
                                        <th class="py-4 px-6">24h High</th>
                                        <th class="py-4 px-6">24h Low</th>
                                        <th class="py-4 px-6">24h Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tp, idx) in tradingPairs" :key="idx"
                                        class="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td class="py-4 px-6">
                                            <div class="flex items-center">
                                                <div
                                                    :class="['h-8 w-8 rounded-full flex items-center justify-center mr-3', tp.bgClass]">
                                                    <i :class="tp.iconClass"></i>
                                                </div>
                                                <div>
                                                    <p class="font-medium">{{ tp.pair }}</p>
                                                    <p class="text-xs text-[#8A8A9D]">{{ tp.name }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6 font-medium">{{ tp.price }}</td>
                                        <td class="py-4 px-6"
                                            :class="tp.change.startsWith('+') ? 'market-up font-semibold' : 'market-down font-semibold'">
                                            {{ tp.change }}</td>
                                        <td class="py-4 px-6">{{ tp.high }}</td>
                                        <td class="py-4 px-6">{{ tp.low }}</td>
                                        <td class="py-4 px-6">{{ tp.volume }}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="text-center mt-8">
                        <button
                            class="border border-white/20 hover:bg-white/5 text-white font-medium px-6 py-3 rounded-lg transition-all">View
                            All Markets</button>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="glass-card rounded-2xl p-8 md:p-12 text-center">
                        <h3 class="text-3xl font-bold mb-4">Ready to Start Trading?</h3>
                        <p class="text-[#8A8A9D] text-lg mb-8 max-w-2xl mx-auto">Join millions of traders worldwide and
                            experience
                            the power of XTBChain's advanced trading platform.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-all button-hover-effect"
                                @click="onCreateAccount">
                                Create Account
                            </button>
                            <button
                                class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all"
                                @click="onDemo">
                                Try Demo Account
                            </button>
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

/* Phone header data */
const phoneHeader = ref({
    pair: 'BTC/USDT',
    name: 'Bitcoin / Tether',
    price: '$42,150.25',
    priceChange: '+2.34%',
    high: '$42,450.00',
    low: '$40,850.75'
})

/* Order book (looped over in template) */
const orderBook = ref([
    { type: 'sell', price: '42,200.50', amount: '0.452' },
    { type: 'sell', price: '42,195.75', amount: '1.245' },
    { type: 'sell', price: '42,190.25', amount: '0.875' },
    { center: true, price: '42,150.25' },
    { type: 'buy', price: '42,145.50', amount: '0.752' },
    { type: 'buy', price: '42,140.25', amount: '1.428' },
    { type: 'buy', price: '42,135.75', amount: '0.924' },
])

/* Trading pairs array (used to generate table rows) */
const tradingPairs = ref([
    {
        pair: 'BTC/USDT',
        name: 'Bitcoin',
        price: '$42,150.25',
        change: '+2.34%',
        high: '$42,450.00',
        low: '$40,850.75',
        volume: '$18.5B',
        iconClass: 'fab fa-bitcoin text-yellow-500',
        bgClass: 'bg-yellow-500/20'
    },
    {
        pair: 'ETH/USDT',
        name: 'Ethereum',
        price: '$2,850.75',
        change: '+1.56%',
        high: '$2,920.50',
        low: '$2,780.25',
        volume: '$12.3B',
        iconClass: 'fab fa-ethereum text-blue-500',
        bgClass: 'bg-blue-500/20'
    },
    {
        pair: 'SOL/USDT',
        name: 'Solana',
        price: '$102.45',
        change: '-0.87%',
        high: '$108.75',
        low: '$98.50',
        volume: '$3.2B',
        iconClass: 'fas fa-coins text-red-500',
        bgClass: 'bg-red-500/20'
    }
])

/* Features array (looped) */
const features = ref([
    { icon: 'fas fa-bolt', title: 'Lightning Fast Execution', text: 'Execute trades in milliseconds with our high-performance matching engine and low latency infrastructure.' },
    { icon: 'fas fa-shield-alt', title: 'Advanced Security', text: 'Your funds are protected with institutional-grade security including cold storage and multi-signature wallets.' },
    { icon: 'fas fa-tachometer-alt', title: 'Low Trading Fees', text: 'Competitive trading fees with maker rebates and volume-based discounts for high-frequency traders.' },
    { icon: 'fas fa-chart-line', title: 'Advanced Charting', text: 'Professional TradingView integration with multiple indicators, drawing tools, and customizable layouts.' },
    { icon: 'fas fa-mobile-alt', title: 'Mobile Trading', text: 'Trade on the go with our fully-featured mobile app for iOS and Android with all platform features.' },
    { icon: 'fas fa-headset', title: '24/7 Support', text: 'Round-the-clock customer support to assist you with any trading needs or technical issues.' }
])

/* simple event handlers; replace with real navigation/actions */
function trade(pair) {
    // placeholder - implement actual behaviour
    console.log('Trade clicked for', pair.pair)
    alert(`Trade: ${pair.pair}`)
}
function onBuy() { console.log('Buy'); alert('Buy action') }
function onSell() { console.log('Sell'); alert('Sell action') }
function onPrimaryCta() { console.log('Primary CTA'); alert('Start Trading') }
function onDemo() { console.log('Demo'); alert('Open Demo') }
function onCreateAccount() { console.log('Create Account'); alert('Create account') }
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

/* button hover effect */
.button-hover-effect {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.button-hover-effect::after {
    content: '';
    position: absolute;
    inset: 0;
    transform-origin: 0;
    transform: scale(0);
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

.button-hover-effect:hover::after {
    transform: scale(1);
}

.feature-card {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.hero-bg {
    background: radial-gradient(circle at top left, #0c0c0f, #000);
}

/* Phone mockup styles */
.phone-mockup {
    width: 320px;
    height: 650px;
    background: #1a1a1e;
    border-radius: 40px;
    position: relative;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.phone-notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 30px;
    background: #1a1a1e;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 10;
}

.phone-screen {
    position: absolute;
    top: 30px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #121214;
    border-radius: 30px;
    overflow: hidden;
}

.phone-content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.phone-header {
    padding: 20px 15px 10px;
    background: #1a1a1e;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.phone-body {
    flex: 1;
    overflow-y: auto;
    padding: 15px;
}

.phone-footer {
    padding: 10px 15px;
    background: #1a1a1e;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
}

.phone-nav-item {
    text-align: center;
    color: #8A8A9D;
    font-size: 12px;
}

.phone-nav-item.active {
    color: #F7CF06;
}

.phone-nav-item i {
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
}

.trade-button {
    background: #F7CF06;
    color: #121214;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    font-weight: 600;
    font-size: 14px;
    width: 100%;
    margin-top: 10px;
}

.chart-placeholder {
    height: 180px;
    background: linear-gradient(135deg, #1a1a1e, #121214);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
}

.order-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.order-book {
    max-height: 150px;
    overflow-y: auto;
}

/* custom scrollbar */
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
