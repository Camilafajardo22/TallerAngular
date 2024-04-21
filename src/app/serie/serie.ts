export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;

    public constructor(id: number, name: string, channel: string, seasons: number){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
}
