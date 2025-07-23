const v2 = new Set();
class C4 {
}
const v5 = new C4();
v5[977113608] = v2;
for (let v7 = 0; v7 < 100; v7++) {
    try { ("toString").repeat(9007199254740992); } catch (e) {}
    const v9 = v5[977113608];
    try { v9.forEach(); } catch (e) {}
}
gc();
