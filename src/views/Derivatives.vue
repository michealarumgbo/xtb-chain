<template>
    <!--
    NOTE: Make sure your main index.html (or app entry) includes:
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  -->
    <div class="min-h-screen flex flex-col text-white bg-[#121214] font-sans">
        <!-- Header -->
        <Navbar />

        <!-- Main Content -->
        <main class="flex-1">
            <!-- Hero Section -->
            <section class="pt-32 pb-20 hero-bg overflow-hidden relative">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                        <!-- Left Content -->
                        <div class="md:w-1/2 space-y-8 text-center md:text-left">
                            <div
                                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b3b3bc7] border border-white/10 text-sm font-medium text-[#F7CF06]">
                                <i class="fas fa-rocket"></i> Advanced Derivatives Trading
                            </div>

                            <h1 class="text-5xl md:text-6xl font-bold leading-tight">
                                Trade Crypto <span class="text-gradient">Derivatives</span>
                            </h1>

                            <p class="text-xl text-[#8A8A9D] max-w-2xl mx-auto md:mx-0">
                                Access futures, perpetual contracts, and options with up to 125x leverage on our
                                professional trading platform.
                            </p>

                            <div class="flex flex-col sm:flex-row gap-4 pt-6">
                                <button
                                    class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-10 py-4 text-lg rounded-lg flex items-center justify-center transition-all button-hover-effect">
                                    Start Trading Now
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                                <button
                                    class="border border-white/20 hover:bg-white/5 text-white font-semibold px-10 py-4 text-lg rounded-lg flex items-center justify-center transition-all">
                                    Learn More
                                </button>
                            </div>

                            <div class="grid grid-cols-3 gap-6 pt-8">
                                <div v-for="s in heroStats" :key="s.label"
                                    class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">{{ s.value }}</span>
                                    <span class="text-sm text-[#8A8A9D]">{{ s.label }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content -->
                        <div class="md:w-1/2 mt-12 md:mt-0 animate-float">
                            <div class="relative">
                                <!-- Mock Trading Interface -->
                                <div class="glass-card rounded-2xl overflow-hidden">
                                    <div class="bg-[#1E1E22] px-6 py-4 border-b border-white/10">
                                        <div class="flex justify-between items-center">
                                            <div class="flex items-center space-x-4">
                                                <h3 class="text-xl font-bold">BTCUSDT Perpetual</h3>
                                                <span class="text-green-500 font-semibold">+2.34%</span>
                                            </div>
                                            <div class="flex space-x-2">
                                                <button class="text-sm px-3 py-1 rounded bg-[#121214]">1H</button>
                                                <button class="text-sm px-3 py-1 rounded bg-[#121214]">1D</button>
                                                <button
                                                    class="text-sm px-3 py-1 rounded bg-[#F7CF06] text-black">1W</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="h-64 flex items-center justify-center bg-gradient-to-br from-[#1E1E22] to-[#121214]">
                                        <div class="text-center">
                                            <i class="fas fa-chart-line text-4xl text-[#F7CF06] mb-4"></i>
                                            <p class="text-[#8A8A9D]">Professional Trading Interface</p>
                                        </div>
                                    </div>

                                    <div class="p-4 bg-[#1E1E22]">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <p class="text-sm text-[#8A8A9D]">Leverage</p>
                                                <p class="font-semibold">50x</p>
                                            </div>
                                            <div>
                                                <p class="text-sm text-[#8A8A9D]">Potential PnL</p>
                                                <p class="font-semibold text-green-500">+$2,450.00</p>
                                            </div>
                                            <button
                                                class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg text-sm">
                                                Trade Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Floating Elements -->
                                <div
                                    class="absolute -top-4 -right-4 glass-card rounded-lg p-3 flex items-center space-x-2">
                                    <div class="h-3 w-3 rounded-full bg-green-500"></div>
                                    <span class="text-xs font-medium">Live Trading</span>
                                </div>

                                <div class="absolute -bottom-4 -left-4 glass-card rounded-lg p-3">
                                    <div class="flex items-center space-x-2">
                                        <i class="fas fa-shield-alt text-[#F7CF06]"></i>
                                        <span class="text-xs">Secure Platform</span>
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
            <section class="py-20 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Trade <span
                                class="text-gradient">Derivatives</span> with XTBChain?</h2>
                        <p class="text-[#8A8A9D]">Experience the power of professional derivatives trading with our
                            advanced platform</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="feature in features" :key="feature.title"
                            class="glass-card rounded-xl p-6 feature-card">
                            <div class="h-16 w-16 rounded-full bg-[#1E1E22] flex items-center justify-center mb-6">
                                <i :class="['text-2xl text-[#F7CF06]', feature.icon]"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
                            <p class="text-[#8A8A9D]">{{ feature.text }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Products Section -->
            <section class="py-20 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Our <span
                                class="text-gradient">Derivatives</span> Products</h2>
                        <p class="text-[#8A8A9D]">A comprehensive suite of derivatives products for every trading
                            strategy</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="product in products" :key="product.title"
                            class="glass-card rounded-xl p-8 text-center hover:bg-white/5 transition-all duration-300">
                            <div
                                :class="['h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6', product.iconBg]">
                                <i :class="[product.icon, 'text-3xl']"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">{{ product.title }}</h3>
                            <p class="text-[#8A8A9D] mb-6">{{ product.desc }}</p>

                            <div class="space-y-3 mb-6">
                                <div v-for="(meta, idx) in product.meta" :key="idx" class="flex justify-between">
                                    <span class="text-[#8A8A9D]">{{ meta.label }}</span>
                                    <span class="font-semibold">{{ meta.value }}</span>
                                </div>
                            </div>

                            <button
                                class="w-full bg-transparent border border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214] font-medium py-3 rounded-lg transition-all">
                                {{ product.cta }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- How It Works -->
            <section class="py-20 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">How <span
                                class="text-gradient">Derivatives</span> Trading Works</h2>
                        <p class="text-[#8A8A9D]">Get started with derivatives trading in just a few simple steps</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div v-for="step in steps" :key="step.title" class="text-center">
                            <div
                                class="h-16 w-16 rounded-full bg-[#F7CF06] flex items-center justify-center mx-auto mb-4 text-[#121214] font-bold text-xl">
                                {{ step.index }}
                            </div>
                            <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
                            <p class="text-[#8A8A9D]">{{ step.text }}</p>
                        </div>
                    </div>

                    <!-- CTA Section -->
                    <div class="mt-16 glass-card rounded-2xl p-8 md:p-12 text-center">
                        <h3 class="text-3xl font-bold mb-4">Ready to Start Trading Derivatives?</h3>
                        <p class="text-[#8A8A9D] text-lg mb-8 max-w-2xl mx-auto">Join millions of traders worldwide and
                            experience the power of XTBChain's advanced derivatives platform.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-all button-hover-effect">
                                Create Account
                            </button>
                            <button
                                class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all">
                                Try Demo Account
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Risk Warning -->
            <section class="py-12 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="glass-card rounded-xl p-6 border border-yellow-500/20">
                        <div class="flex items-start">
                            <div
                                class="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-exclamation-triangle text-yellow-500"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Risk Warning</h3>
                                <p class="text-[#8A8A9D]">
                                    Trading derivatives involves significant risk and may not be suitable for all
                                    investors. The high degree of leverage can work against you as well as for you.
                                    Before deciding to trade derivatives, you should carefully consider your investment
                                    objectives, level of experience, and risk appetite. The possibility exists that you
                                    could sustain a loss of some or all of your initial investment and therefore you
                                    should not invest money that you cannot afford to lose. You should be aware of all
                                    the risks associated with derivatives trading and seek advice from an independent
                                    financial advisor if you have any doubts.
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

const mobileOpen = ref(false)

const navLinks = [
    { name: 'Markets', href: 'markets.html' },
    { name: 'Trade', href: 'trade.html' },
    { name: 'Derivatives', href: 'derivatives.html', active: true },
    { name: 'Earn', href: 'earn.html' },
    { name: 'Learn', href: 'learn.html' }
]

const heroStats = [
    { value: '125x', label: 'Max Leverage' },
    { value: '$42B+', label: 'Daily Volume' },
    { value: '0.02%', label: 'Maker Fees' }
]

const features = [
    {
        icon: 'fas fa-bolt',
        title: 'High Leverage',
        text: 'Amplify your trading power with up to 125x leverage on select perpetual contracts.'
    },
    {
        icon: 'fas fa-tachometer-alt',
        title: 'Low Fees',
        text: 'Competitive trading fees with maker rebates and tight spreads across all markets.'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Advanced Risk Management',
        text: 'Comprehensive risk management tools including stop-losses and take-profit orders.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Professional Charting',
        text: 'Advanced TradingView integration with multiple indicators and drawing tools.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Trading',
        text: 'Trade on the go with our fully-featured mobile app for iOS and Android.'
    },
    {
        icon: 'fas fa-headset',
        title: '24/7 Support',
        text: 'Round-the-clock customer support to assist you with any trading needs.'
    }
]

const products = [
    {
        title: 'Perpetual Contracts',
        desc: 'Trade with up to 125x leverage on crypto perpetual contracts with no expiration date.',
        icon: 'fas fa-infinity',
        iconBg: 'bg-purple-500/20',
        meta: [
            { label: 'Max Leverage', value: '125x' },
            { label: 'Funding Rate', value: '0.01%' },
            { label: 'Markets', value: '50+' }
        ],
        cta: 'Learn More'
    },
    {
        title: 'Futures Contracts',
        desc: 'Trade quarterly and monthly futures contracts with fixed expiration dates.',
        icon: 'fas fa-calendar-alt',
        iconBg: 'bg-blue-500/20',
        meta: [
            { label: 'Max Leverage', value: '100x' },
            { label: 'Contract Types', value: 'Quarterly, Monthly' },
            { label: 'Markets', value: '30+' }
        ],
        cta: 'Learn More'
    },
    {
        title: 'Options Trading',
        desc: 'Advanced options trading coming soon with European and American style options.',
        icon: 'fas fa-cubes',
        iconBg: 'bg-green-500/20',
        meta: [
            { label: 'Option Styles', value: 'European, American' },
            { label: 'Settlement', value: 'Cash, Physical' },
            { label: 'Status', value: 'Coming Soon' }
        ],
        cta: 'Get Notified'
    }
]

const steps = [
    { index: 1, title: 'Create Account', text: 'Sign up and complete identity verification to access derivatives trading.' },
    { index: 2, title: 'Deposit Funds', text: 'Deposit cryptocurrency or fiat to fund your derivatives trading account.' },
    { index: 3, title: 'Learn & Practice', text: 'Use our educational resources and demo account to practice trading.' },
    { index: 4, title: 'Start Trading', text: 'Execute your first trade with advanced order types and risk management.' }
]

const socials = [
    { name: 'twitter', href: '#', icon: 'fab fa-twitter' },
    { name: 'facebook', href: '#', icon: 'fab fa-facebook' },
    { name: 'linkedin', href: '#', icon: 'fab fa-linkedin' },
    { name: 'instagram', href: '#', icon: 'fab fa-instagram' },
    { name: 'youtube', href: '#', icon: 'fab fa-youtube' },
    { name: 'github', href: '#', icon: 'fab fa-github' }
]

const footerGroups = [
    {
        title: 'Products',
        links: [
            { text: 'Markets', href: 'markets.html' },
            { text: 'Trade', href: 'trade.html' },
            { text: 'Derivatives', href: 'derivatives.html' },
            { text: 'Earn', href: 'earn.html' },
            { text: 'Learn', href: 'learn.html' }
        ]
    },
    {
        title: 'Services',
        links: [
            { text: 'Institutional', href: '#' },
            { text: 'VIP Program', href: '#' },
            { text: 'API', href: '#' },
            { text: 'Referral Program', href: '#' },
            { text: 'Affiliate', href: '#' }
        ]
    },
    {
        title: 'Support',
        links: [
            { text: 'Help Center', href: '#' },
            { text: 'Fees', href: '#' },
            { text: 'Security', href: '#' },
            { text: 'Contact Us', href: '#' },
            { text: 'Status', href: '#' }
        ]
    }
]

const bottomLinks = [
    { text: 'Terms of Service', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Disclaimer', href: '#' }
]
</script>

<style scoped>
/* Keep your original styles here (scoped to this component) */
body {
    background-color: #121214;
    color: white;
    font-family: ui-sans-serif, system-ui, sans-serif;
}

/* Glass card */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* text gradient */
.text-gradient {
    background: linear-gradient(to right, #f7cf06, #facc15);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Navbar blur */
.navbar-blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* market up/down colors */
.market-up {
    color: #00ff88;
}

.market-down {
    color: #ff4444;
}

/* Scrollbar */
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
    scale: 0;
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

.button-hover-effect:hover::after {
    scale: 1;
}

/* feature card */
.feature-card {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

/* float animation */
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

/* hero background */
.hero-bg {
    background: radial-gradient(circle at top left, #0c0c0f, #000);
}

/* small transition used by mobile menu */
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
