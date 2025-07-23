function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(); } catch (e) {}
}
const v4 = new F0();
const v5 = new F0(v4);
const v6 = [13,256,-65537,827691643,8,-128,1902506819,-1304625622,53422];
for (let v7 = 0; v7 < 100; v7++) {
    for (const v8 of v6) {
        try { v8(v5, v5, F0, v7); } catch (e) {}
    }
    for (let v10 = 0; v10 < 5; v10++) {
    }
}
gc();
