const v3 = new Int32Array(2);
const o12 = {
    n(a5, a6, a7) {
        const v10 = createGlobalObject().Atomics;
        let v11;
        try { v11 = v10.and(a7, a7, 9223372036854775807n); } catch (e) {}
        return v11;
    },
};
const t9 = o12.n;
t9(Int32Array, o12, v3);
gc();
