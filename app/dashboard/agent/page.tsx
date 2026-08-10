"use client";

import Link from "next/link";
import {
  Users,
  Wallet,
  ArrowLeftRight,
  UserPlus,
  ArrowUpRight,
  Gamepad2,
  Activity,
} from "lucide-react";

import { useAuth } from "@/features/auth/context";

const stats = [
  {
    title: "My Players",
    value: "0",
    description: "Players assigned to you",
    icon: Users,
    href: "/dashboard/agent/players",
  },
  {
    title: "Available Balance",
    value: "$0.00",
    description: "Current GameRoom balance",
    icon: Wallet,
    href: "/dashboard/agent/balance",
  },
  {
    title: "Transactions",
    value: "0",
    description: "Your recent transactions",
    icon: ArrowLeftRight,
    href: "/dashboard/agent/transactions",
  },
];

export default function AgentDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* =========================
          HEADER
      ========================== */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-blue-400 font-medium">
            Agent Portal
          </p>

          <h1 className="mt-1 text-2xl font-bold text-white">
            Welcome back,{" "}
            {user?.full_name || user?.username}
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Manage your players and monitor your GameRoom
            account.
          </p>
        </div>

        <Link
          href="/dashboard/agent/players/create"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
        >
          <UserPlus className="w-4 h-4" />
          Create Player
        </Link>
      </div>

      {/* =========================
          STATS
      ========================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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

                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300" />
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

      {/* =========================
          CONTENT
      ========================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Player overview */}

        <div className="xl:col-span-2 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">
                My Players
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Players assigned to your account
              </p>
            </div>

            <Link
              href="/dashboard/agent/players"
              className="text-xs text-indigo-400 hover:text-indigo-300"
            >
              View all
            </Link>
          </div>

          {/* Empty state */}

          <div className="p-12 text-center">
            <div className="mx-auto w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
              <Users className="w-6 h-6 text-slate-600" />
            </div>

            <h3 className="mt-4 text-sm font-medium text-slate-300">
              No players yet
            </h3>

            <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto">
              Create your first player to start managing
              their GameRoom account.
            </p>

            <Link
              href="/dashboard/agent/players/create"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm text-white transition"
            >
              <UserPlus className="w-4 h-4" />
              Create Player
            </Link>
          </div>
        </div>

        {/* Account */}

        <div className="rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="p-5 border-b border-slate-800">
            <h2 className="font-semibold text-white">
              My Account
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              GameRoom account information
            </p>
          </div>

          <div className="p-5 space-y-5">
            {/* Balance */}

            <div>
              <p className="text-xs text-slate-500">
                Available Balance
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                $0.00
              </p>
            </div>

            <div className="h-px bg-slate-800" />

            {/* Account status */}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-300">
                    Account Status
                  </p>

                  <p className="text-xs text-slate-600">
                    GameRoom account
                  </p>
                </div>
              </div>

              <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs">
                Active
              </span>
            </div>

            {/* GameRoom */}

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-indigo-400" />
              </div>

              <div>
                <p className="text-sm text-slate-300">
                  GameRoom
                </p>

                <p className="text-xs text-slate-600">
                  Account connected
                </p>
              </div>
            </div>

            <Link
              href="/dashboard/agent/balance"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-800 hover:bg-slate-800 text-sm text-slate-300 transition"
            >
              <Wallet className="w-4 h-4" />
              View Balance
            </Link>
          </div>
        </div>
      </div>

      {/* =========================
          RECENT TRANSACTIONS
      ========================== */}

      <div className="rounded-xl border border-slate-800 bg-slate-900/60">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-white">
              Recent Transactions
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Recent account activity
            </p>
          </div>

          <Link
            href="/dashboard/agent/transactions"
            className="text-xs text-indigo-400 hover:text-indigo-300"
          >
            View all
          </Link>
        </div>

        <div className="p-12 text-center">
          <ArrowLeftRight className="w-8 h-8 text-slate-700 mx-auto" />

          <p className="mt-3 text-sm text-slate-400">
            No transactions yet
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Your transaction activity will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}