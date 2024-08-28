export class Pokemon {
    name: number;
    imageUrl: string;
    height: string;
    weight: boolean;
    stats: Array<Stat>;
    abilities: Array<Abilitie>;
    url: string;

    constructor(name: number,
        imageUrl: string,
        height: string,
        weight: boolean,
        stats: Array<Stat>,
        abilities: Array<Abilitie>,
        url:string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.height = height;
        this.weight = weight;
        this.stats = stats;
        this.abilities = abilities;
        this.url = url;
    }
}

export class Stat {
    value: number;
    name: string;

    constructor(value: number, name: string) {
        this.value = value;
        this.name = name;
    }

}

export class Abilitie {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}