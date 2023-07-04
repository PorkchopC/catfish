export type { Rod }
export {oldRod, shopItems}

type Rod = {
    name: string,
    maxTension: number,
    cost?: number,
    text?: string
}

const oldRod: Rod = {
    name: "Old Rod",
    maxTension: 5
}

const goodRod: Rod = {
    name: "Good Rod",
    maxTension: 6,
    cost: 5,
    text: "A more recent model of rod"

}

const superRod: Rod = {
    name: "Super Rod",
    maxTension: 7,
    cost: 7,
    text: "The top-of-the-line model"
}

let shopItems: Rod[] = [
    goodRod, superRod
]

