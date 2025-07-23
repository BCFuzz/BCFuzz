function f0(a1, a2, a3, a4) {
    const v7 = new Uint8Array(209);
    for (const v8 in v7) {
    }
    for (let i = 0; i < 5; i++) {
        const v10 = new ArrayBuffer();
        const v12 = new DataView(v10);
        const v13 = v12.__proto__;
        try { v13.getFloat32(); } catch (e) {}
    }
    return f0;
}
const v15 = f0(f0, f0, f0, f0);
const v16 = f0.prototype;
v16.constructor(v15, v16, v16);
gc();
