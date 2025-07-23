function f0() {
    const v2 = new Date();
    const v3 = v2.getUTCDay();
    const v5 = Symbol.iterator;
    const o8 = {
        [v5]() {
            const o7 = {
                "c": v3,
            };
        },
    };
    return v3;
}
const v11 = new Uint32Array(4046);
v11.reduce(f0);
gc();
