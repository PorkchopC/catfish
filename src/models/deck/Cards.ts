export type { Card }
export {}

type Card = {
    id: number,
    name?: string,
    tension: number,
    experience?: number,
    bait?: number,
    coins?: number,
    wild?: number
}