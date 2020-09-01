export interface Player {
    id: number;
    name: string;
};

export interface PlayersGroup {
    id: number;
    players: Player[];    
};

export interface Tournament {
    players: Player[];
    playersGroup: PlayersGroup[];
};