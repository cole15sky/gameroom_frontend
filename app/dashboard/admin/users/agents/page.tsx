"use client";

import { useState } from "react";

import AgentForm from "@/components/users/AgentForm";
import { useAgents } from "@/features/users/hooks";

export default function AgentsPage() {
  const {
    agents,
    deletedAgents,
    loading,
    addAgent,
    removeAgent,
    restoreAgent,
  } = useAgents();

  const [showForm, setShowForm] = useState(false);
  const [creating, setCreating] = useState(false);

  const handleCreateAgent = async (data: any) => {
    setCreating(true);

    try {
      await addAgent(data);
      setShowForm(false);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="p-6">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Agents
          </h1>

          <p className="text-sm text-gray-500">
            Manage GameRoom agents
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          + Create Agent
        </button>
      </div>


      {/* Create Agent */}

      {showForm && (
        <div className="mb-8 max-w-xl rounded-lg border p-6">

          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Create Agent
            </h2>

            <button
              onClick={() => setShowForm(false)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>

          <AgentForm
            onSubmit={handleCreateAgent}
            loading={creating}
          />
        </div>
      )}


      {/* Agents */}

      <div className="rounded-lg border">

        <div className="border-b p-4">
          <h2 className="font-semibold">
            Active Agents
          </h2>
        </div>

        {loading ? (
          <div className="p-6">
            Loading agents...
          </div>
        ) : agents.length === 0 ? (
          <div className="p-6 text-gray-500">
            No agents found.
          </div>
        ) : (
          <div className="divide-y">

            {agents.map((agent) => (
              <div
                key={agent.id}
                className="flex items-center justify-between p-4"
              >

                <div>
                  <p className="font-medium">
                    {agent.full_name ||
                      agent.username}
                  </p>

                  <p className="text-sm text-gray-500">
                    {agent.email}
                  </p>

                  <p className="text-sm text-gray-500">
                    GameRoom:{" "}
                    {agent.gameroom_username}
                  </p>
                </div>

                <div className="text-right">

                  <p className="font-semibold">
                    ${agent.balance}
                  </p>

                  <button
                    onClick={() =>
                      removeAgent(agent.id)
                    }
                    className="mt-2 text-sm text-red-600"
                  >
                    Deactivate
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>


      {/* Deleted Agents */}

      {deletedAgents.length > 0 && (
        <div className="mt-8 rounded-lg border">

          <div className="border-b p-4">
            <h2 className="font-semibold">
              Inactive Agents
            </h2>
          </div>

          <div className="divide-y">

            {deletedAgents.map((agent) => (
              <div
                key={agent.id}
                className="flex items-center justify-between p-4"
              >

                <div>
                  <p className="font-medium">
                    {agent.full_name ||
                      agent.username}
                  </p>

                  <p className="text-sm text-gray-500">
                    {agent.email}
                  </p>
                </div>

                <button
                  onClick={() =>
                    restoreAgent(agent.id)
                  }
                  className="text-sm text-green-600"
                >
                  Recover
                </button>

              </div>
            ))}

          </div>
        </div>
      )}

    </div>
  );
}