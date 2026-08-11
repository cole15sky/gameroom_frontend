export type UserRole = "ADMIN" | "AGENT" | "PLAYER";

   // BASE USER

export type User = {
  id: number;
  email: string;
  username: string;
  full_name: string | null;
  profile_pic: string | null;
  role: UserRole;
  phone: string;
  is_active: boolean;
  date_joined?: string;
};


   // AGENT

export type Agent = {
  id: number;

  user: number;

  email: string;
  username: string;
  full_name: string | null;
  profile_pic: string | null;
  phone: string;

  gameroom_username: string;
  gameroom_id: number | null;
  gameroom_token?: string | null;
  token_expires_at?: string | null;

  balance: string;
  is_active: boolean;

  created_at: string;
  updated_at: string;
};

   // PLAYER

export type Player = {
  id: number;

  user: number;

  email: string;
  username: string;
  full_name: string | null;
  profile_pic: string | null;
  phone: string;

  agent: number;
  agent_username?: string;

  gameroom_username: string;
  gameroom_id: number | null;

  balance: string;
  is_active: boolean;

  created_at: string;
  updated_at: string;
};

   // CREATE AGENT

export type AgentCreatePayload = {
  email: string;
  username: string;
  password: string;

  full_name?: string;
  phone?: string;

  gameroom_username: string;
};

   // UPDATE AGENT

export type AgentUpdatePayload = {
  email?: string;
  username?: string;
  full_name?: string;
  phone?: string;

  gameroom_username?: string;

  is_active?: boolean;
};

   // CREATE PLAYER

export type PlayerCreatePayload = {
  email: string;
  username: string;
  password: string;

  full_name?: string;
  phone?: string;

  agent: number;
  gameroom_username: string;
};

   // UPDATE PLAYER

export type PlayerUpdatePayload = {
  email?: string;
  username?: string;
  full_name?: string;
  phone?: string;

  agent?: number;
  gameroom_username?: string;

  is_active?: boolean;
};