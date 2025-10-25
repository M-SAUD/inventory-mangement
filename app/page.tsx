'use client'
import React, { useState } from 'react';
import { Package, BarChart3, Users, Zap, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function InventoryLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">StockFlow</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 transition">Sign in</button>
              <Link
              href="/sign-in"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get started
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-600">Features</a>
              <a href="#solutions" className="block text-gray-600">Solutions</a>
              <a href="#pricing" className="block text-gray-600">Pricing</a>
              <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg">Sign in</button>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">Get started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                Inventory management reimagined
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Track, manage, and optimize your inventory
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Real-time visibility into your stock levels. Collaborate seamlessly across teams. Scale your operations with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center group">
                  Start free trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium">
                  Watch demo
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6">Free 14-day trial • No credit card required</p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Stock Alert</p>
                      <p className="text-sm text-gray-500">Low inventory detected</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Inventory Health</span>
                      <span className="text-sm text-green-600 font-bold">+12%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <p className="text-2xl font-bold text-gray-900">2.4k</p>
                      <p className="text-sm text-gray-500">Items tracked</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-500">Accuracy rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to stay in control</h2>
            <p className="text-xl text-gray-600">Powerful features built for modern inventory management</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor stock levels instantly across all locations. Get automated alerts before you run out.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Make data-driven decisions with comprehensive reports and predictive analytics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together seamlessly with role-based access and real-time updates for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">GlobalRetail</div>
            <div className="text-2xl font-bold text-gray-400">LogiFlow</div>
            <div className="text-2xl font-bold text-gray-400">SupplyChain+</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your inventory management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already optimizing their operations with StockFlow
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium text-lg inline-flex items-center group">
            Get started for free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-white">StockFlow</span>
          </div>
          <p className="text-sm">© 2025 StockFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}