import API from "@/lib/api";

import type {
  User,
  Agent,
  Player,
  AgentCreatePayload,
  AgentUpdatePayload,
  PlayerCreatePayload,
  PlayerUpdatePayload,
} from "@/types/users";

/* =========================================================
   USERS
========================================================= */

export const getUsers = async (): Promise<User[]> => {
  const res = await API.get("users/");
  return res.data;
};

/* =========================================================
   AGENTS
========================================================= */

/**
 * Admin creates an Agent.
 *
 * Backend should:
 * 1. Create User
 * 2. Force role = AGENT
 * 3. Create AgentProfile
 */
export const registerAgent = async (
  data: AgentCreatePayload
): Promise<Agent> => {
  const res = await API.post("users/agents/", data);
  return res.data;
};

/**
 * Get active agents.
 */
export const getAgents = async (): Promise<Agent[]> => {
  const res = await API.get("users/agents/");
  return res.data;
};

/**
 * Get soft-deleted/inactive agents.
 *
 * Only use this if your backend implements this endpoint.
 */
export const getDeletedAgents = async (): Promise<Agent[]> => {
  const res = await API.get("users/agents/soft_deleted/");
  return res.data;
};

/**
 * Update Agent.
 */
export const updateAgent = async (
  id: number,
  data: AgentUpdatePayload
): Promise<Agent> => {
  const res = await API.put(`users/agents/${id}/`, data);
  return res.data;
};

/**
 * Deactivate Agent.
 */
export const softDeleteAgent = async (id: number): Promise<void> => {
  await API.delete(`users/agents/${id}/soft_delete/`);
};

/**
 * Recover Agent.
 */
export const recoverAgent = async (id: number): Promise<Agent> => {
  const res = await API.patch(`users/agents/${id}/recover/`);
  return res.data;
};


   // PLAYERS

export const registerPlayer = async (
  data: PlayerCreatePayload
): Promise<Player> => {
  const res = await API.post("users/players/", data);
  return res.data;
};

export const getPlayers = async (): Promise<Player[]> => {
  const res = await API.get("users/players/");
  return res.data;
};

export const getDeletedPlayers = async (): Promise<Player[]> => {
  const res = await API.get("users/players/soft_deleted/");
  return res.data;
};

export const updatePlayer = async (
  id: number,
  data: PlayerUpdatePayload
): Promise<Player> => {
  const res = await API.put(`users/players/${id}/`, data);
  return res.data;
};

export const softDeletePlayer = async (id: number): Promise<void> => {
  await API.delete(`users/players/${id}/soft_delete/`);
};

export const recoverPlayer = async (id: number): Promise<Player> => {
  const res = await API.patch(`users/players/${id}/recover/`);
  return res.data;
};