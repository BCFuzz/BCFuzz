const o9 = {
    [undefined](a2, a3, a4) {
        const v6 = createGlobalObject();
        const v7 = v6.Atomics;
        try { v7.store(v6, v7, v7); } catch (e) {}
    },
};
o9.undefined();
gc();
