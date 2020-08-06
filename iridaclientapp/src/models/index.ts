export interface Player {
    id: number;
    name: string;
};

export interface PlayerInGroup {
    index: number;
    player: Player;
};

export interface PlayersGroup {
    id: number;
    players: PlayerInGroup[];    
};

export interface Tournament {
    players: Player[];
    playersGroup: PlayersGroup[];
};