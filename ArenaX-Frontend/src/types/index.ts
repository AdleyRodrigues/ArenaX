// 🎮 Tipos principais da plataforma de campeonatos

export type SportType = 'lol' | 'futebol' | 'beach-tennis';

export type TournamentStatus = 'inscricoes-abertas' | 'em-andamento' | 'finalizado' | 'cancelado';

export type BracketType = 'eliminacao-simples' | 'eliminacao-dupla' | 'pontos-corridos' | 'grupos-eliminatorias';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'organizador' | 'jogador' | 'capitao';
}

export interface Player {
  id: string;
  name: string;
  nickname: string;
  avatar?: string;
  position?: string; // Para futebol: goleiro, zagueiro, etc. Para LOL: top, jungle, etc.
  teamId?: string;
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  sport: SportType;
  captainId: string;
  players: Player[];
  wins?: number;
  losses?: number;
  createdAt: Date;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  sport: SportType;
  status: TournamentStatus;
  bracketType: BracketType;
  maxTeams: number;
  currentTeams: number;
  prize?: string;
  startDate: Date;
  endDate?: Date;
  registrationDeadline: Date;
  organizerId: string;
  banner?: string;
  rules?: string[];
  teams: Team[];
}

export interface Match {
  id: string;
  tournamentId: string;
  team1: Team;
  team2: Team;
  score1?: number;
  score2?: number;
  scheduledDate?: Date;
  status: 'agendada' | 'em-andamento' | 'finalizada';
  winner?: string; // ID do time vencedor
}
