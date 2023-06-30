import { shuffleDiscard } from "./deck/Deck"

export type { Round }
export {Days, Times, Phases, progressRound, freshRound}

type Round = {
    day: Days
    time: Times
    phase: Phases
}

enum Days {
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
};

enum Times {
    Morning = 'Morning', 
    Afternoon = 'Afternoon', 
    Evening = 'Evening',
};

enum Phases {
   Prep = 'Prep Phase',
   Angling = 'Angling Phase'
}

const progressRound = (round : Round) => {
    let newRound: Round = {
        day: Days.Friday,
        time: Times.Morning,
        phase: Phases.Prep
    };
    if(round.time === Times.Morning) newRound.time = Times.Afternoon;
    if(round.time === Times.Afternoon) newRound.time = Times.Evening;
    if(round.time === Times.Evening && round.day === Days.Friday ) newRound.time = Times.Morning, newRound.day = Days.Saturday;
    if(round.time === Times.Evening && round.day === Days.Saturday) newRound.time = Times.Morning, newRound.day = Days.Sunday;
    return newRound;
}

const freshRound = () => {
    const newRound: Round = {
        day: Days.Friday,
        time: Times.Morning,
        phase: Phases.Prep
    };
    return newRound;
}