"use client";

import Link from "next/link";
import {
  Users,
  UserRound,
  Wallet,
  ArrowLeftRight,
  Plus,
  ArrowUpRight,
  Activity,
} from "lucide-react";

import { useAuth } from "@/features/auth/context";

const stats = [
  {
    title: "Total Agents",
    value: "0",
    description: "Active dashboard agents",
    icon: Users,
    href: "/dashboard/admin/agents",
  },
  {
    title: "Total Players",
    value: "0",
    description: "Players across all agents",
    icon: UserRound,
    href: "/dashboard/admin/players",
  },
  {
    title: "Total Balance",
    value: "$0.00",
    description: "Combined account balance",
    icon: Wallet,
    href: "/dashboard/admin/balances",
  },
  {
    title: "Transactions",
    value: "0",
    description: "Transactions recorded",
    icon: ArrowLeftRight,
    href: "/dashboard/admin/transactions",
  },
];

export default function AdminDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Welcome back,{" "}
            <span className="text-slate-200">
              {user?.full_name || user?.username}
            </span>
            . Here's what's happening with your GameRoom
            accounts.
          </p>
        </div>

        <Link
          href="/dashboard/admin/agents/create"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create Agent
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Link
              key={stat.title}
              href={stat.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 hover:bg-slate-900 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors" />
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-400">
                  {stat.title}
                </p>

                <p className="mt-1 text-2xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  {stat.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="xl:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="p-5 border-b border-slate-800">
            <h2 className="font-semibold text-white">
              Quick Actions
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Common administrative operations
            </p>
          </div>

          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/dashboard/admin/agents/create"
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Create Agent
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Add a new dashboard agent
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard/admin/players/create"
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <UserRound className="w-5 h-5 text-purple-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Create Player
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Create a player under an agent
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard/admin/transactions"
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Transactions
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Review money movement
                </p>
              </div>
            </Link>

            <Link
              href="/dashboard/admin/balances"
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800 hover:border-yellow-500/40 hover:bg-slate-900 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Balances
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Monitor account balances
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* System Status */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="p-5 border-b border-slate-800">
            <h2 className="font-semibold text-white">
              System Status
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Current service status
            </p>
          </div>

          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-slate-300">
                  Backend API
                </span>
              </div>

              <span className="text-xs text-emerald-400">
                Operational
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-slate-300">
                  Authentication
                </span>
              </div>

              <span className="text-xs text-emerald-400">
                Operational
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-slate-300">
                  GameRoom API
                </span>
              </div>

              <span className="text-xs text-emerald-400">
                Connected
              </span>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Activity className="w-4 h-4" />
                System ready
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-white">
              Recent Transactions
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Latest money movements
            </p>
          </div>

          <Link
            href="/dashboard/admin/transactions"
            className="text-xs text-indigo-400 hover:text-indigo-300"
          >
            View all
          </Link>
        </div>

        <div className="p-10 text-center">
          <ArrowLeftRight className="w-8 h-8 text-slate-700 mx-auto" />

          <p className="mt-3 text-sm text-slate-400">
            No transactions yet
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Transactions will appear here once money movement
            is recorded.
          </p>
        </div>
      </div>
    </div>
  );
}