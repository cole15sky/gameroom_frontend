"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserRound,
  Wallet,
  ArrowLeftRight,
  Settings,
  LogOut,
  Menu,
  X,
  Gamepad2,
  ShieldCheck,
} from "lucide-react";

import { useAuth } from "@/features/auth/context";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Agents",
    href: "/dashboard/admin/agents",
    icon: Users,
  },
  {
    name: "Players",
    href: "/dashboard/admin/players",
    icon: UserRound,
  },
  {
    name: "Transactions",
    href: "/dashboard/admin/transactions",
    icon: ArrowLeftRight,
  },
  {
    name: "Balances",
    href: "/dashboard/admin/balances",
    icon: Wallet,
  },
  {
    name: "Settings",
    href: "/dashboard/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace(
        `/login?next=${encodeURIComponent(pathname)}`
      );
      return;
    }

    if (user.role !== "ADMIN") {
      router.replace("/login");
    }
  }, [user, loading, router, pathname]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-400">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (user.role !== "ADMIN") {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-64 bg-slate-900 border-r border-slate-800
          transform transition-transform duration-200
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-800">
            <Link
              href="/dashboard/admin"
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="font-bold text-white leading-none">
                  GameRoom
                </p>
                <p className="text-[10px] text-indigo-400 uppercase tracking-wider mt-1">
                  Management
                </p>
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admin badge */}
          <div className="px-4 pt-5">
            <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-600/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-indigo-300">
                    Administrator
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
            <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
              Management
            </p>

            {navigation.map((item) => {
              const Icon = item.icon;

              const active =
                item.href === "/dashboard/admin"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg
                    text-sm font-medium transition-colors
                    ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t border-slate-800">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 bg-slate-950/90 backdrop-blur border-b border-slate-800">
          <div className="h-full px-4 sm:px-6 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="hidden lg:block">
              <p className="text-sm font-medium text-white">
                Admin Dashboard
              </p>
              <p className="text-xs text-slate-500">
                GameRoom Management System
              </p>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">
                  {user.full_name || user.username}
                </p>
                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>

              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}