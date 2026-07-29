export function KANAL_FIND_SLOT(id, busy) {

    const base = ["1","2","3","4","5","6","7","8","9"];
    const varSlots = ["B1","B2","B3","B4","B5","B6","B7","B8","B9"];
    const meta = ["BX"];
    const orbit = ["B∞"];

    for (const p of base) if (!busy[p]) return p;
    for (const p of varSlots) if (!busy[p]) return p;
    if (!busy["BX"]) return "BX";
    return "B∞";
}
