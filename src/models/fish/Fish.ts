export type { Fish, KeepNet, FishList }
export {shuffleFish, fillPond, fishList, fishCaught, fishEscaped}

type Fish = {
    id: number,
    name: string,
    size: number,
}

type KeepNet = Fish[]

type FishList = {
    stock: Fish[]
    keepNet: KeepNet
    escaped: Fish[]
}

const fishCaught = (selectedFish: Fish, pond: FishList) => {
    let newPond: FishList = {    
        keepNet: [...pond.keepNet, selectedFish],
        escaped: [...pond.escaped],
        stock: pond.stock.filter((fish) => !pond.keepNet.includes(fish) && !pond.escaped.includes(fish)) as Fish[]
    };
    return newPond;
};

const fishEscaped = (selectedFish: Fish, pond: FishList) => {
    let newPond: FishList = {
        keepNet: [...pond.keepNet],
        escaped: [...pond.escaped, selectedFish],
        stock: pond.stock.filter((fish) => !pond.keepNet.includes(fish) && !pond.escaped.includes(fish)) as Fish[]
    };
    return newPond;
}

const shuffleFish = (pond: FishList) => {
    let shuffledFish: FishList = {stock: [], keepNet: [], escaped: []}
    shuffledFish.stock = pond.stock
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    return shuffledFish
};

const fillPond = (pond: FishList) => {
    pond.stock = pond.stock.filter((fish) => !pond.keepNet.includes(fish) && !pond.escaped.includes(fish));
    let starting4 = pond.stock.slice(0, 4);
    return starting4;
}

const fishList: FishList ={ stock: [
    { id: 1, name: "Fish A", size: 4 },
    { id: 2, name: "Fish B", size: 4 },
    { id: 3, name: "Fish C", size: 5 },
    { id: 4, name: "Fish D", size: 5 },
    { id: 5, name: "Fish E", size: 6 },
    { id: 6, name: "Fish F", size: 6 },
    { id: 7, name: "Fish G", size: 7 },
    { id: 8, name: "Fish H", size: 7 },
    { id: 9, name: "Fish I", size: 3 },
    { id: 10, name: "Fish J", size: 3 },
    { id: 11, name: "Fish K", size: 3 },
    { id: 12, name: "Fish L", size: 4 },
    { id: 13, name: "Fish M", size: 5 },
    { id: 14, name: "Fish N", size: 6 },
    { id: 15, name: "Fish O", size: 4 },
    { id: 16, name: "Fish P", size: 7 }
],
keepNet: [],
escaped: []
}