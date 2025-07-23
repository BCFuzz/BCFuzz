function f0(a1, a2) {
    const o14 = {
        p(a4, a5, a6) {
            const o9 = {
                "maxByteLength": 65535,
            };
            const v11 = new SharedArrayBuffer(5, o9);
            const v13 = new Int16Array(v11);
            return v13;
        },
    };
    return o14;
}
const v15 = f0();
const v16 = v15.p(f0, v15, f0, f0);
createGlobalObject().Atomics.add(v16);
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
}
gc();
