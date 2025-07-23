const o9 = {
    n(a2, a3, a4) {
        const v7 = new Proxy(Uint32Array, Reflect);
        const o8 = {
            ...v7,
        };
        return o8;
    },
};
o9.n(o9);
gc();
