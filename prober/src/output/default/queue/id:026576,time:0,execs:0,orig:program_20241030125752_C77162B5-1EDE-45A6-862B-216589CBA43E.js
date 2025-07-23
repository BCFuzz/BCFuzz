const v0 = [];
const o23 = {
    n(a2, a3, a4) {
        for (let i7 = 0, i8 = 10; i8--, i7 < i8;) {
            v0.length |= i7;
            const v17 = createGlobalObject().Atomics;
            try { v17.compareExchange(v17, a2, v17); } catch (e) {}
        }
        const v21 = new Uint8Array(3129);
        for (const v22 in v21) {
        }
        return a3;
    },
};
const t14 = o23.n;
t14();
gc();
