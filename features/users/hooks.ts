"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getAgents,
  getDeletedAgents,
  registerAgent,
  updateAgent,
  softDeleteAgent,
  recoverAgent,

  getPlayers,
  getDeletedPlayers,
  registerPlayer,
  updatePlayer,
  softDeletePlayer,
  recoverPlayer,
} from "./api";

import type {
  Agent,
  Player,
  AgentCreatePayload,
  AgentUpdatePayload,
  PlayerCreatePayload,
  PlayerUpdatePayload,
} from "@/types/users";


/* =========================================================
   HELPERS
========================================================= */

const toArray = <T,>(data: unknown): T[] => {
  const normalized = (data as any)?.results ?? data ?? [];

  return Array.isArray(normalized)
    ? normalized
    : [];
};


/* =========================================================
   AGENTS
========================================================= */

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [deletedAgents, setDeletedAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAgents = useCallback(async () => {
    setLoading(true);

    try {
      const [active, deleted] = await Promise.all([
        getAgents(),
        getDeletedAgents(),
      ]);

      setAgents(toArray<Agent>(active));
      setDeletedAgents(toArray<Agent>(deleted));
    } catch (err) {
      console.error("Fetch agents error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  /* ---------------------------------------------------------
     CREATE
  --------------------------------------------------------- */

  const addAgent = useCallback(
    async (data: AgentCreatePayload) => {
      const created = await registerAgent(data);

      await fetchAgents();

      return created;
    },
    [fetchAgents]
  );

  /* ---------------------------------------------------------
     UPDATE
  --------------------------------------------------------- */

  const editAgent = useCallback(
    async (
      id: number,
      data: AgentUpdatePayload
    ) => {
      const updated = await updateAgent(id, data);

      await fetchAgents();

      return updated;
    },
    [fetchAgents]
  );

  /* ---------------------------------------------------------
     DELETE
  --------------------------------------------------------- */

  const removeAgent = useCallback(
    async (id: number) => {
      await softDeleteAgent(id);

      await fetchAgents();
    },
    [fetchAgents]
  );

  /* ---------------------------------------------------------
     RECOVER
  --------------------------------------------------------- */

  const restoreAgent = useCallback(
    async (id: number) => {
      await recoverAgent(id);

      await fetchAgents();
    },
    [fetchAgents]
  );

  /* ---------------------------------------------------------
     INITIAL LOAD
  --------------------------------------------------------- */

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  return {
    agents,
    deletedAgents,
    loading,

    addAgent,
    editAgent,
    removeAgent,
    restoreAgent,

    refresh: fetchAgents,
  };
}


/* =========================================================
   PLAYERS
========================================================= */

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [deletedPlayers, setDeletedPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPlayers = useCallback(async () => {
    setLoading(true);

    try {
      const [active, deleted] = await Promise.all([
        getPlayers(),
        getDeletedPlayers(),
      ]);

      setPlayers(toArray<Player>(active));
      setDeletedPlayers(toArray<Player>(deleted));
    } catch (err) {
      console.error("Fetch players error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addPlayer = useCallback(
    async (data: PlayerCreatePayload) => {
      const created = await registerPlayer(data);

      await fetchPlayers();

      return created;
    },
    [fetchPlayers]
  );

  const editPlayer = useCallback(
    async (
      id: number,
      data: PlayerUpdatePayload
    ) => {
      const updated = await updatePlayer(id, data);

      await fetchPlayers();

      return updated;
    },
    [fetchPlayers]
  );

  const removePlayer = useCallback(
    async (id: number) => {
      await softDeletePlayer(id);

      await fetchPlayers();
    },
    [fetchPlayers]
  );

  const restorePlayer = useCallback(
    async (id: number) => {
      await recoverPlayer(id);

      await fetchPlayers();
    },
    [fetchPlayers]
  );

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return {
    players,
    deletedPlayers,
    loading,

    addPlayer,
    editPlayer,
    removePlayer,
    restorePlayer,

    refresh: fetchPlayers,
  };
}