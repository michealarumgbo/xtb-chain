<template>
    <div class="min-h-screen flex flex-col earn-root">
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
                                <i class="fas fa-coins"></i> Grow Your Crypto Assets
                            </div>
                            <h1 class="text-4xl md:text-5xl font-bold leading-tight">Earn Passive <span
                                    class="text-gradient">Income</span> with Crypto</h1>
                            <p class="text-lg text-[#8A8A9D] max-w-2xl mx-auto md:mx-0">Put your crypto assets to work
                                and earn attractive yields through staking, lending, and yield farming. Start earning in
                                minutes.</p>

                            <div class="flex flex-col sm:flex-row gap-4 pt-6">
                                <button
                                    class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg rounded-lg flex items-center justify-center transition-all button-hover-effect">
                                    Register to Start Earning
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                                <button
                                    class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-3 text-lg rounded-lg flex items-center justify-center transition-all">
                                    Learn How It Works
                                </button>
                            </div>

                            <div class="grid grid-cols-3 gap-6 pt-8">
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">15%</span>
                                    <span class="text-sm text-[#8A8A9D]">Avg. APY</span>
                                </div>
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">$2.5B+</span>
                                    <span class="text-sm text-[#8A8A9D]">Assets Staked</span>
                                </div>
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">50+</span>
                                    <span class="text-sm text-[#8A8A9D]">Earn Products</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content - Illustration -->
                        <div class="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-float">
                            <div class="relative">
                                <!-- Main Card -->
                                <div class="glass-card rounded-2xl p-8 max-w-md">
                                    <div class="flex items-center justify-between mb-6">
                                        <h3 class="text-xl font-bold">Potential Earnings</h3>
                                        <div class="apy-badge">15.2% APY</div>
                                    </div>

                                    <div class="space-y-6">
                                        <div>
                                            <div class="flex justify-between text-sm mb-2">
                                                <span class="text-[#8A8A9D]">With 1 BTC Stake</span>
                                                <span>$42,150</span>
                                            </div>
                                            <div class="text-2xl font-bold">Up to 0.16 BTC/year</div>
                                        </div>

                                        <div>
                                            <div class="flex justify-between text-sm mb-2">
                                                <span class="text-[#8A8A9D]">Estimated Daily</span>
                                                <span class="market-up">+$17.70</span>
                                            </div>
                                            <div class="flex justify-between text-sm">
                                                <span class="text-[#8A8A9D]">Estimated Monthly</span>
                                                <span class="market-up">+$531.00</span>
                                            </div>
                                        </div>

                                        <div class="pt-4">
                                            <button
                                                class="w-full bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-colors">
                                                Register to Start Earning
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Floating Elements -->
                                <div
                                    class="absolute -top-4 -right-4 glass-card rounded-lg p-3 flex items-center space-x-2">
                                    <div class="h-3 w-3 rounded-full bg-green-500"></div>
                                    <span class="text-xs font-medium">Available</span>
                                </div>

                                <div class="absolute -bottom-4 -left-4 glass-card rounded-lg p-3">
                                    <div class="flex items-center space-x-2">
                                        <i class="fas fa-lock text-[#F7CF06]"></i>
                                        <span class="text-xs">Secure</span>
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

            <!-- Products Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Earn <span class="text-gradient">Products</span>
                        </h2>
                        <p class="text-[#8A8A9D]">Choose from a variety of earning opportunities tailored to your risk
                            profile</p>
                    </div>


                    <InvestmentsOptions />
                </div>
            </section>

            <!-- How to Earn Section -->
            <section class="py-16 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">How to <span class="text-gradient">Start
                                Earning</span></h2>
                        <p class="text-[#8A8A9D]">Follow these simple steps to put your crypto assets to work</p>
                    </div>

                    <HowItWorks />

                    <div class="info-card">
                        <div class="flex items-start">
                            <div
                                class="h-10 w-10 rounded-full bg-[#F7CF06] flex items-center justify-center mr-4 flex-shrink-0 text-[#121214]">
                                <i class="fas fa-lightbulb"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold mb-2">Pro Tip: Start Small</h3>
                                <p class="text-[#8A8A9D]">Begin with a small amount to understand how each earning
                                    product works. You can always add more funds later as you become comfortable with
                                    the platform and the specific earning mechanisms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Earning Strategies Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Earning <span
                                class="text-gradient">Strategies</span>
                        </h2>
                        <p class="text-[#8A8A9D]">Learn about different approaches to maximize your crypto earnings</p>
                    </div>

                    <InvestmentsStrategies />
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="py-16 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span
                                class="text-gradient">Questions</span></h2>
                        <p class="text-[#8A8A9D]">Get answers to common questions about earning with XTBChain</p>
                    </div>

                    <div class="max-w-3xl mx-auto">
                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-3">How does staking work?</h3>
                            <p class="text-[#8A8A9D]">Staking involves locking your cryptocurrency to support the
                                operations of a blockchain network. In return, you earn rewards for helping secure the
                                network and validate transactions.</p>
                        </div>

                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-3">Is staking safe?</h3>
                            <p class="text-[#8A8A9D]">Staking on XTBChain is secure with institutional-grade security
                                measures. However, like all crypto activities, it carries some risk including market
                                volatility and potential slashing penalties in rare cases.</p>
                        </div>

                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-3">When do I receive my staking rewards?</h3>
                            <p class="text-[#8A8A9D]">Rewards are distributed according to the specific staking product.
                                Most products offer daily or weekly rewards, which are automatically compounded to
                                maximize your earnings.</p>
                        </div>

                        <div class="glass-card rounded-xl p-6">
                            <h3 class="text-xl font-bold mb-3">Can I unstake my assets at any time?</h3>
                            <p class="text-[#8A8A9D]">This depends on the staking product. Flexible staking allows
                                instant unstaking, while fixed-term products require you to wait until the lock period
                                ends. Early unstaking may incur penalties.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our <span
                                class="text-gradient">Users</span> Say
                        </h2>
                        <p class="text-[#8A8A9D]">Join thousands of investors growing their crypto portfolios</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="glass-card rounded-xl p-6">
                            <div class="flex items-center mb-4">
                                <div
                                    class="h-12 w-12 rounded-full bg-[#F7CF06] flex items-center justify-center text-black font-bold mr-4">
                                    JD
                                </div>
                                <div>
                                    <h3 class="font-bold">John D.</h3>
                                    <p class="text-sm text-[#8A8A9D]">Staking since 2023</p>
                                </div>
                            </div>
                            <p class="text-[#8A8A9D]">"I've earned over $2,500 in passive income through XTBChain's
                                staking products. The platform is secure and the yields are competitive."</p>
                        </div>

                        <div class="glass-card rounded-xl p-6">
                            <div class="flex items-center mb-4">
                                <div
                                    class="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
                                    SM
                                </div>
                                <div>
                                    <h3 class="font-bold">Sarah M.</h3>
                                    <p class="text-sm text-[#8A8A9D]">Yield Farmer</p>
                                </div>
                            </div>
                            <p class="text-[#8A8A9D]">"The yield farming opportunities on XTBChain have helped me
                                diversify my portfolio and earn significantly higher returns than traditional savings."
                            </p>
                        </div>

                        <div class="glass-card rounded-xl p-6">
                            <div class="flex items-center mb-4">
                                <div
                                    class="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-4">
                                    RK
                                </div>
                                <div>
                                    <h3 class="font-bold">Robert K.</h3>
                                    <p class="text-sm text-[#8A8A9D]">Institutional Investor</p>
                                </div>
                            </div>
                            <p class="text-[#8A8A9D]">"As an institutional investor, I appreciate the security and
                                transparency of XTBChain's earning products. The VIP tier offers excellent benefits."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-16 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="glass-card rounded-2xl p-8 md:p-12 text-center">
                        <h3 class="text-3xl font-bold mb-4">Ready to Start Earning?</h3>
                        <p class="text-[#8A8A9D] text-lg mb-8 max-w-2xl mx-auto">Join thousands of investors who are
                            growing their crypto portfolios with XTBChain's earning products.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-all button-hover-effect">
                                Register Now
                            </button>
                            <button
                                class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all">
                                Contact Support
                            </button>
                        </div>
                        <p class="text-[#8A8A9D] text-sm mt-6">Registration takes less than 2 minutes</p>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import InvestmentsOptions from '@/components/ui/InvestmentsOptions.vue';
import HowItWorks from '@/components/ui/HowItWorks.vue';
import InvestmentsStrategies from '@/components/ui/InvestmentsStrategies.vue';

const mobileMenu = ref(false)
</script>

<style scoped>
.step-card {
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.step-card:hover {
    border-color: #F7CF06;
    transform: translateY(-5px);
}
</style>
