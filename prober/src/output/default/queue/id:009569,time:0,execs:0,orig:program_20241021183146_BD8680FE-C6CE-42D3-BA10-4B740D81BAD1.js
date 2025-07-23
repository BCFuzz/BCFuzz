const v1 = new Map();
const v4 = v1[Symbol.split];
for (let v5 = 0; v5 < 250; v5++) {
    try { v4(); } catch (e) {}
    for (let v7 = 0; v7 < 25; v7++) {
    }
    v5++;
    v5--;
}
gc();
