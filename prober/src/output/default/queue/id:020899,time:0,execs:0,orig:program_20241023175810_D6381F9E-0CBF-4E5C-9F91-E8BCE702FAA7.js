const o24 = {
    n(a1, a2, a3) {
        let v4 = -4294967297;
        v4--;
        for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
            const v18 = createGlobalObject().Atomics;
            try { v18.compareExchange(v18, i9, v4, i9); } catch (e) {}
        }
        const v22 = new Uint8Array(3129);
        for (const v23 in v22) {
        }
        return this;
    },
};
const v25 = o24.n;
v25(o24, o24, v25, v25);
gc();
