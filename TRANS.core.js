export const TRANS_ID = "H";

export function TRANS_RESPO(tmpPath) {
    return {
        tmpPath,
        mode: "RESPO-H",
        meaning: "Höhen-Interpretation",
        info: "RESPO interpretiert TMP-Daten als Höhenmatrix"
    };
}

export function TRANS_BEN(tmpPath) {
    return {
        tmpPath,
        mode: "BEN-H",
        score: Math.floor(Math.random() * 100),
        meaning: "Höhen-Bewertung",
        info: "BEN bewertet Höhenstruktur"
    };
}

export function TRANS_AI(orbit, id) {
    return {
        id,
        orbit,
        action: "AI-Höhen-Regelung aktiv",
        info: "AI steuert Höhenorbit"
    };
}
