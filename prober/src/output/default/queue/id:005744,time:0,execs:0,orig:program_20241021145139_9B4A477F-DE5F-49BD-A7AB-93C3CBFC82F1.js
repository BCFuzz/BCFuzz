function f0(a1, a2, a3, a4) {
    const v7 = new Uint8Array(209);
    for (const v8 in v7) {
    }
    for (let i = 0; i < 5; i++) {
        const o11 = {
            "maxByteLength": 25,
        };
        const v13 = new ArrayBuffer(25, o11);
        const v15 = new Int16Array(v13);
        v15[4];
    }
    return a3;
}
const v17 = f0(f0, f0, f0, f0);
const v18 = f0.prototype;
v18.constructor(v18, f0, v17);
gc();
