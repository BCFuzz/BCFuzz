function f0(a1, a2, a3) {
    const o9 = {
        toString(a5, a6, a7, a8) {
            return a2;
        },
    };
    return o9;
}
const v10 = f0(f0, f0, f0);
const v12 = f0().constructor;
v12.getOwnPropertySymbols(v10);
class C14 extends v12 {
}
try { C14.fromEntries(); } catch (e) {}
gc();
