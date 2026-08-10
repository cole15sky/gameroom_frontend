export type Role = "ADMIN" | "AGENT" | "PLAYER";

// BASE USER
export type User = {
  id: number;
  email: string;
  username: string;
  full_name?: string | null;
  role: Role;
  phone?: string | null;
  profile_pic?: string | null;
  is_active: boolean;
  date_joined?: string;
};


// AGENT

export type Agent = User & {
  role: "AGENT";

  gameroom_username: string;
  gameroom_id?: number | null;
  balance: string;
  agent_is_active: boolean;
};


// PLAYER

export type Player = User & {
  role: "PLAYER";

  gameroom_username: string;
  gameroom_id?: number | null;
  balance: string;
  agent_id: number;
  player_is_active?: boolean;
};


// AGENT CREATE

export type AgentCreatePayload = {
  email: string;
  username: string;
  full_name?: string;
  password: string;
  phone?: string;
  profile_pic?: string;
  gameroom_username: string;
};


// PLAYER CREATE

export type PlayerCreatePayload = {
  email: string;
  username: string;
  full_name?: string;
  password: string;
  phone?: string;
  profile_pic?: string;
  gameroom_username: string;

  // Required when ADMIN creates a Player.
  // Not required when AGENT creates a Player.
  agent_id?: number;
};

// ---------------------------------------------
// API RESPONSE
// ---------------------------------------------

export type ApiResponse<T> = {
  message: string;
  data: T;
};