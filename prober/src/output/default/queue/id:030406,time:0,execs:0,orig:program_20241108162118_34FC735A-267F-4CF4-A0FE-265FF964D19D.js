function f0(a1, a2) {
    const o14 = {
        p(a4, a5, a6) {
            const o9 = {
                "maxByteLength": 65535,
            };
            const v11 = new SharedArrayBuffer(5, o9);
            const v13 = new Uint16Array(v11);
            return v13;
        },
    };
    return o14;
}
const v16 = f0().p(f0, f0);
createGlobalObject().Atomics.or(v16);
gc();
