export type { Rod }
export {oldRod}

type Rod = {
    name: string,
    maxTension: number,
}

const oldRod: Rod = {
    name: "Old Rod",
    maxTension: 5
}