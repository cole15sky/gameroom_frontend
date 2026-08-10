"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Wallet,
  ArrowLeftRight,
  Gamepad2,
  BarChart3,
  LockKeyhole,
  Zap,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Agent Management",
    description:
      "Create and manage dashboard agents from a centralized administration panel.",
  },
  {
    icon: Gamepad2,
    title: "Player Management",
    description:
      "Create players under agents and keep their GameRoom accounts organized.",
  },
  {
    icon: Wallet,
    title: "Balance Management",
    description:
      "Monitor account balances and maintain a clear view of available funds.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transaction Tracking",
    description:
      "Track money movement with a complete transaction history for accountability.",
  },
  {
    icon: BarChart3,
    title: "Real-time Overview",
    description:
      "Get a clear overview of agents, players, balances and system activity.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based Access",
    description:
      "Keep Admin, Agent and Player permissions separated and controlled.",
  },
];

const roles = [
  {
    role: "ADMIN",
    title: "Administrators",
    description:
      "Full control over the management system.",
    features: [
      "Create and manage agents",
      "Create and manage players",
      "Monitor balances",
      "Track transactions",
      "Manage system access",
    ],
  },
  {
    role: "AGENT",
    title: "Agents",
    description:
      "Manage players assigned to your account.",
    features: [
      "Manage assigned players",
      "View player balances",
      "Create players",
      "Track player transactions",
      "Access your GameRoom account",
    ],
  },
  {
    role: "PLAYER",
    title: "Players",
    description:
      "A simple dashboard for account activity.",
    features: [
      "View account balance",
      "View transaction history",
      "Monitor account activity",
      "Access GameRoom information",
      "Secure personal account",
    ],
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* =========================
          NAVBAR
      ========================== */}

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>

            <div>
              <p className="font-bold tracking-tight">
                GameRoom
              </p>

              <p className="text-[9px] text-indigo-400 uppercase tracking-[0.2em]">
                Management
              </p>
            </div>
          </Link>

          {/* Desktop nav */}

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#roles"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Platform
            </a>

            <a
              href="#security"
              className="text-sm text-slate-400 hover:text-white transition"
            >
              Security
            </a>
          </div>

          {/* Actions */}

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm text-slate-300 hover:text-white transition"
            >
              Sign in
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition shadow-lg shadow-indigo-600/20"
            >
              Access Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================== */}

      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background glow */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px]" />

          <div className="absolute top-[40%] left-[-200px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px]" />

          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px]" />
        </div>

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                GameRoom Management Platform
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Manage your
                <br />

                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  GameRoom ecosystem.
                </span>
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                A centralized platform for managing agents,
                players, balances and transactions — all from
                one secure dashboard.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/login"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition shadow-xl shadow-indigo-600/20"
                >
                  Access Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-medium transition"
                >
                  Explore Platform
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Dashboard preview */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-20 relative"
            >
              <div className="absolute -inset-10 bg-indigo-500/10 blur-3xl rounded-full" />

              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-black/40 overflow-hidden">
                {/* Browser bar */}

                <div className="h-10 border-b border-slate-800 flex items-center px-4 gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />

                  <div className="ml-4 h-5 w-48 rounded bg-slate-800/70" />
                </div>

                {/* Fake dashboard */}

                <div className="p-5 sm:p-8 text-left">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="h-4 w-32 bg-slate-700 rounded mb-2" />
                      <div className="h-3 w-48 bg-slate-800 rounded" />
                    </div>

                    <div className="h-8 w-28 bg-indigo-600/60 rounded-lg" />
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      "Agents",
                      "Players",
                      "Balance",
                      "Transactions",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="p-4 rounded-xl border border-slate-800 bg-slate-950/70"
                      >
                        <div className="h-3 w-16 bg-slate-700 rounded mb-3" />

                        <div className="h-6 w-20 bg-slate-600 rounded" />

                        <div className="mt-3 h-2 w-24 bg-slate-800 rounded" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div className="lg:col-span-2 h-40 rounded-xl border border-slate-800 bg-slate-950/70 p-5">
                      <div className="h-3 w-32 bg-slate-700 rounded mb-6" />

                      <div className="flex items-end gap-3 h-24">
                        {[35, 55, 40, 70, 60, 85, 72, 95].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 bg-indigo-500/30 rounded-t"
                              style={{
                                height: `${height}%`,
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>

                    <div className="h-40 rounded-xl border border-slate-800 bg-slate-950/70 p-5">
                      <div className="h-3 w-28 bg-slate-700 rounded mb-5" />

                      <div className="space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >
                            <div className="w-7 h-7 rounded-full bg-slate-800" />

                            <div className="flex-1">
                              <div className="h-2 w-20 bg-slate-700 rounded" />
                              <div className="h-2 w-12 bg-slate-800 rounded mt-1" />
                            </div>

                            <div className="h-2 w-10 bg-slate-700 rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================== */}

      <section
        id="features"
        className="py-28 border-t border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">
              Platform
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Everything you need to manage GameRoom.
            </h2>

            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              Bring your administrative operations, accounts and
              financial activity together in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 rounded-2xl overflow-hidden border border-slate-800">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="bg-slate-950 p-8 hover:bg-slate-900 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          ROLES
      ========================== */}

      <section
        id="roles"
        className="py-28 bg-slate-900/30 border-y border-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">
              Role-based platform
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              One platform.
              <br />
              Different responsibilities.
            </h2>

            <p className="mt-5 text-slate-400">
              Every account gets the access and tools required for
              its role.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {roles.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest">
                    {role.role}
                  </span>

                  <ShieldCheck className="w-5 h-5 text-slate-700" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {role.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {role.description}
                </p>

                <div className="mt-7 space-y-3">
                  {role.features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />

                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECURITY
      ========================== */}

      <section
        id="security"
        className="py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-950/30 via-slate-900/50 to-slate-950 p-8 sm:p-12 lg:p-16 overflow-hidden relative">
            <div className="absolute right-[-100px] top-[-100px] w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <LockKeyhole className="w-6 h-6 text-indigo-400" />
                </div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
                  Built around controlled access.
                </h2>

                <p className="mt-5 text-slate-400 leading-relaxed">
                  GameRoom Management separates administrative,
                  agent and player responsibilities through
                  role-based access control and authenticated
                  dashboard sessions.
                </p>

                <Link
                  href="/login"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Sign in securely
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Role-based access",
                  },
                  {
                    icon: LockKeyhole,
                    title: "JWT authentication",
                  },
                  {
                    icon: ArrowLeftRight,
                    title: "Transaction records",
                  },
                  {
                    icon: Zap,
                    title: "Centralized control",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl border border-slate-800 bg-slate-950/60"
                    >
                      <Icon className="w-5 h-5 text-indigo-400" />

                      <p className="mt-4 text-sm font-medium">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}

      <section className="py-28 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium">
            <Gamepad2 className="w-4 h-4" />
            GameRoom Management
          </div>

          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
            Ready to manage your GameRoom?
          </h2>

          <p className="mt-5 text-slate-400 text-lg">
            Access your dashboard and manage your agents, players
            and transactions from one place.
          </p>

          <Link
            href="/login"
            className="mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition shadow-xl shadow-indigo-600/20"
          >
            Access Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  GameRoom Management
                </p>

                <p className="text-xs text-slate-600">
                  Management platform
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} GameRoom Management.
              All rights reserved.
            </p>

            <Link
              href="/login"
              className="text-xs text-slate-500 hover:text-white transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}