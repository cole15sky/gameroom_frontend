"use client";

import { FormEvent, useState } from "react";

import type { AgentCreatePayload } from "@/types/user";

type AgentFormProps = {
  onSubmit: (data: AgentCreatePayload) => Promise<void>;
  loading?: boolean;
};

export default function AgentForm({
  onSubmit,
  loading = false,
}: AgentFormProps) {
  const [form, setForm] = useState<AgentCreatePayload>({
    email: "",
    username: "",
    password: "",
    full_name: "",
    phone: "",
    gameroom_username: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    try {
      await onSubmit(form);

      setForm({
        email: "",
        username: "",
        password: "",
        full_name: "",
        phone: "",
        gameroom_username: "",
      });
    } catch (err: any) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
        "Failed to create agent."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Full Name */}

      <div>
        <label className="mb-1 block text-sm font-medium">
          Full Name
        </label>

        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Username */}

      <div>
        <label className="mb-1 block text-sm font-medium">
          Username
        </label>

        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Email */}

      <div>
        <label className="mb-1 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="agent@example.com"
          required
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Phone */}

      <div>
        <label className="mb-1 block text-sm font-medium">
          Phone
        </label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Password */}

      <div>
        <label className="mb-1 block text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
          minLength={8}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* GameRoom Username */}

      <div>
        <label className="mb-1 block text-sm font-medium">
          GameRoom Username
        </label>

        <input
          name="gameroom_username"
          value={form.gameroom_username}
          onChange={handleChange}
          placeholder="GameRoom account username"
          required
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Agent"}
      </button>
    </form>
  );
}