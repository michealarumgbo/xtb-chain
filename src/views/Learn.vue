<!-- App.vue -->
<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <Navbar />

        <!-- Main Content -->
        <main class="flex-1 ">
            <!-- Hero Section -->
            <section class="py-23 hero-bg overflow-hidden">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                        <!-- Left Content -->
                        <div class="md:w-full space-y-6 text-center flex items-center flex-col md:text-left">
                            <div
                                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b3b3bc7] border border-white/10 text-sm font-medium text-[#F7CF06]">
                                <i class="fas fa-graduation-cap"></i> Crypto Education Center
                            </div>
                            <h1 class="text-4xl md:text-5xl font-bold leading-tight">Master <span
                                    class="text-gradient">Crypto</span> Trading & Investing</h1>
                            <p class="text-lg text-[#8A8A9D] max-w-2xl mx-auto md:mx-0">From beginner basics to advanced
                                strategies, learn everything you need to succeed in cryptocurrency markets.</p>

                            <div class="flex flex-col sm:flex-row gap-4 pt-6">
                                <button
                                    class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg rounded-lg flex items-center justify-center transition-all button-hover-effect">
                                    Start Learning Now
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                                <button
                                    class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-3 text-lg rounded-lg flex items-center justify-center transition-all">
                                    Browse Courses
                                </button>
                            </div>

                            <div class="grid grid-cols-3 gap-6 pt-8">
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">150+</span>
                                    <span class="text-sm text-[#8A8A9D]">Lessons</span>
                                </div>
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">25+</span>
                                    <span class="text-sm text-[#8A8A9D]">Expert Instructors</span>
                                </div>
                                <div class="flex flex-col items-center md:items-start">
                                    <span class="text-3xl font-bold text-[#F7CF06]">10k+</span>
                                    <span class="text-sm text-[#8A8A9D]">Students</span>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content - Illustration -->

                    </div>
                </div>

                <!-- Background Elements -->
                <div class="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>
                <div class="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#F7CF06]/5 blur-3xl"></div>
            </section>

            <!-- Learning Paths Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Choose Your <span class="text-gradient">Learning
                                Path</span></h2>
                        <p class="text-[#8A8A9D]">Follow structured paths designed for different experience levels and
                            goals</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Beginner Path -->
                        <div class="category-card glass-card rounded-xl p-6 text-center">
                            <div
                                class="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-seedling text-3xl text-green-500"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Beginner</h3>
                            <p class="text-[#8A8A9D] mb-4">Start your crypto journey with the fundamentals</p>
                            <div class="space-y-2 mb-6 text-left">
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Crypto Basics</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Wallet Setup</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Safe Trading</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm mb-4">
                                <span class="text-[#8A8A9D]">12 lessons</span>
                                <span class="text-[#F7CF06]">4 hours</span>
                            </div>
                            <button
                                class="w-full bg-transparent border border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214] font-medium py-3 rounded-lg transition-all">
                                Start Path
                            </button>
                        </div>

                        <!-- Trader Path -->
                        <div class="category-card glass-card rounded-xl p-6 text-center">
                            <div
                                class="h-20 w-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-chart-line text-3xl text-blue-500"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Trader</h3>
                            <p class="text-[#8A8A9D] mb-4">Master technical analysis and trading strategies</p>
                            <div class="space-y-2 mb-6 text-left">
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Technical Analysis</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Risk Management</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Trading Psychology</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm mb-4">
                                <span class="text-[#8A8A9D]">18 lessons</span>
                                <span class="text-[#F7CF06]">6 hours</span>
                            </div>
                            <button
                                class="w-full bg-transparent border border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214] font-medium py-3 rounded-lg transition-all">
                                Start Path
                            </button>
                        </div>

                        <!-- Investor Path -->
                        <div class="category-card glass-card rounded-xl p-6 text-center">
                            <div
                                class="h-20 w-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-coins text-3xl text-purple-500"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Investor</h3>
                            <p class="text-[#8A8A9D] mb-4">Learn long-term investment strategies and portfolio
                                management</p>
                            <div class="space-y-2 mb-6 text-left">
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Fundamental Analysis</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Portfolio Diversification</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Market Cycles</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm mb-4">
                                <span class="text-[#8A8A9D]">15 lessons</span>
                                <span class="text-[#F7CF06]">5 hours</span>
                            </div>
                            <button
                                class="w-full bg-transparent border border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214] font-medium py-3 rounded-lg transition-all">
                                Start Path
                            </button>
                        </div>

                        <!-- DeFi Path -->
                        <div class="category-card glass-card rounded-xl p-6 text-center">
                            <div
                                class="h-20 w-20 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
                                <i class="fas fa-university text-3xl text-yellow-500"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">DeFi Expert</h3>
                            <p class="text-[#8A8A9D] mb-4">Master decentralized finance, yield farming, and protocols
                            </p>
                            <div class="space-y-2 mb-6 text-left">
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>DeFi Fundamentals</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Yield Farming</span>
                                </div>
                                <div class="flex items-center text-sm">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Smart Contracts</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-sm mb-4">
                                <span class="text-[#8A8A9D]">20 lessons</span>
                                <span class="text-[#F7CF06]">7 hours</span>
                            </div>
                            <button
                                class="w-full bg-transparent border border-[#F7CF06] text-[#F7CF06] hover:bg-[#F7CF06] hover:text-[#121214] font-medium py-3 rounded-lg transition-all">
                                Start Path
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Courses Section -->
            <section class="py-16 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div>
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured <span
                                    class="text-gradient">Courses</span></h2>
                            <p class="text-[#8A8A9D] max-w-2xl">Hand-picked courses to accelerate your crypto knowledge
                            </p>
                        </div>
                        <button
                            class="mt-4 md:mt-0 border border-white/20 hover:bg-white/5 text-white font-medium px-6 py-3 rounded-lg transition-all">
                            View All Courses
                        </button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Crypto Basics Course -->
                        <div class="lesson-card glass-card rounded-xl overflow-hidden">
                            <div
                                class="h-40 bg-linear-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                                <i class="fas fa-coins text-5xl text-[#F7CF06]"></i>
                            </div>
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-xl font-bold">Crypto Fundamentals</h3>
                                    <span
                                        class="difficulty-beginner text-xs font-medium px-2 py-1 rounded-full">Beginner</span>
                                </div>
                                <p class="text-[#8A8A9D] mb-4">Learn the basics of blockchain, Bitcoin, Ethereum, and
                                    how to safely get started with crypto.</p>
                                <div class="flex justify-between text-sm text-[#8A8A9D] mb-4">
                                    <span>12 lessons</span>
                                    <span>•</span>
                                    <span>2.5 hours</span>
                                    <span>•</span>
                                    <span>4.8★</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-[#F7CF06] flex items-center justify-center text-black text-xs font-bold mr-2">
                                            JD
                                        </div>
                                        <span class="text-sm">John Doe</span>
                                    </div>
                                    <button
                                        class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors">
                                        Enroll Free
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Technical Analysis Course -->
                        <div class="lesson-card glass-card rounded-xl overflow-hidden">
                            <div
                                class="h-40 bg-linear-to-r from-blue-500/20 to-green-500/20 flex items-center justify-center">
                                <i class="fas fa-chart-line text-5xl text-[#F7CF06]"></i>
                            </div>
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-xl font-bold">Technical Analysis Mastery</h3>
                                    <span
                                        class="difficulty-intermediate text-xs font-medium px-2 py-1 rounded-full">Intermediate</span>
                                </div>
                                <p class="text-[#8A8A9D] mb-4">Master chart patterns, indicators, and trading strategies
                                    used by professional traders.</p>
                                <div class="flex justify-between text-sm text-[#8A8A9D] mb-4">
                                    <span>18 lessons</span>
                                    <span>•</span>
                                    <span>4 hours</span>
                                    <span>•</span>
                                    <span>4.9★</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold mr-2">
                                            SM
                                        </div>
                                        <span class="text-sm">Sarah Miller</span>
                                    </div>
                                    <button
                                        class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors">
                                        Enroll Free
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- DeFi Course -->
                        <div class="lesson-card glass-card rounded-xl overflow-hidden">
                            <div
                                class="h-40 bg-gradient-to-r from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                                <i class="fas fa-university text-5xl text-[#F7CF06]"></i>
                            </div>
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-xl font-bold">DeFi & Yield Farming</h3>
                                    <span
                                        class="difficulty-advanced text-xs font-medium px-2 py-1 rounded-full">Advanced</span>
                                </div>
                                <p class="text-[#8A8A9D] mb-4">Deep dive into decentralized finance, liquidity pools,
                                    and advanced yield strategies.</p>
                                <div class="flex justify-between text-sm text-[#8A8A9D] mb-4">
                                    <span>15 lessons</span>
                                    <span>•</span>
                                    <span>3.5 hours</span>
                                    <span>•</span>
                                    <span>4.7★</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div
                                            class="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold mr-2">
                                            RK
                                        </div>
                                        <span class="text-sm">Robert Kim</span>
                                    </div>
                                    <button
                                        class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors">
                                        Enroll Free
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Learning Resources Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Learning <span
                                class="text-gradient">Resources</span></h2>
                        <p class="text-[#8A8A9D]">Explore our comprehensive library of educational materials</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="glass-card rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
                            <div
                                class="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-book text-2xl text-blue-500"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">Guides</h3>
                            <p class="text-[#8A8A9D] text-sm">Step-by-step tutorials and how-to guides</p>
                            <span class="inline-block mt-3 text-[#F7CF06] text-sm font-medium">45+ guides</span>
                        </div>

                        <div class="glass-card rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
                            <div
                                class="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-video text-2xl text-green-500"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">Video Lessons</h3>
                            <p class="text-[#8A8A9D] text-sm">Visual learning with expert instructors</p>
                            <span class="inline-block mt-3 text-[#F7CF06] text-sm font-medium">120+ videos</span>
                        </div>

                        <div class="glass-card rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
                            <div
                                class="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-file-alt text-2xl text-purple-500"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">Articles</h3>
                            <p class="text-[#8A8A9D] text-sm">In-depth analysis and market insights</p>
                            <span class="inline-block mt-3 text-[#F7CF06] text-sm font-medium">200+ articles</span>
                        </div>

                        <div class="glass-card rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-300">
                            <div
                                class="h-16 w-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-chart-bar text-2xl text-yellow-500"></i>
                            </div>
                            <h3 class="text-lg font-bold mb-2">Market Analysis</h3>
                            <p class="text-[#8A8A9D] text-sm">Weekly market updates and trends</p>
                            <span class="inline-block mt-3 text-[#F7CF06] text-sm font-medium">Weekly updates</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="py-16 bg-[#1E1E22]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Learning <span class="text-gradient">FAQ</span>
                        </h2>
                        <p class="text-[#8A8A9D]">Common questions about our learning platform</p>
                    </div>

                    <div class="max-w-3xl mx-auto">
                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-3">Do I need any prior experience to start learning?</h3>
                            <p class="text-[#8A8A9D]">No prior experience is needed! Our beginner courses are designed
                                for complete newcomers to cryptocurrency. We start with the absolute basics and
                                gradually build up to more advanced concepts.</p>
                        </div>

                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-3">Are the courses really free?</h3>
                            <p class="text-[#8A8A9D]">Yes, all our educational content is completely free. XTBChain is
                                committed to crypto education and making quality learning resources accessible to
                                everyone in the community.</p>
                        </div>

                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-3">Do I get a certificate after completing a course?</h3>
                            <p class="text-[#8A8A9D]">Yes, you'll receive a digital certificate of completion for each
                                course you finish. These certificates can be shared on LinkedIn and other professional
                                networks.</p>
                        </div>

                        <div class="glass-card rounded-xl p-6">
                            <h3 class="text-xl font-bold mb-3">How often is the content updated?</h3>
                            <p class="text-[#8A8A9D]">We regularly update our courses to reflect the latest market
                                developments, new technologies, and trading strategies. The crypto space moves fast, and
                                we ensure our education keeps pace.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-16 bg-[#121214]">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="glass-card rounded-2xl p-8 md:p-12 text-center">
                        <h3 class="text-3xl font-bold mb-4">Start Your Crypto Education Today</h3>
                        <p class="text-[#8A8A9D] text-lg mb-8 max-w-2xl mx-auto">Join thousands of students who have
                            transformed their crypto knowledge with XTBChain's comprehensive learning platform.</p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                class="bg-[#F7CF06] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-all button-hover-effect">
                                Browse All Courses
                            </button>
                            <button
                                class="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all">
                                Meet Our Instructors
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
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

// No script logic is needed for this static page
</script>

<style>
.category-card {
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-card:hover {
    border-color: #F7CF06;
    transform: translateY(-5px);
}
</style>