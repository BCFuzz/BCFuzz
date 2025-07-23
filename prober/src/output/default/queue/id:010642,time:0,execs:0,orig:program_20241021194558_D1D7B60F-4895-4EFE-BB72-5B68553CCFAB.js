function f0(a1, a2, a3, a4) {
    const v7 = new Uint8Array(209);
    for (const v8 in v7) {
    }
    for (let i = 0; i < 5; i++) {
        const v10 = new ArrayBuffer(a1, ArrayBuffer);
        const v12 = new DataView(v10);
        const v13 = v12.__proto__;
        try { v13.getUint32(209); } catch (e) {}
    }
    return 209;
}
f0();
f0.prototype.constructor();
gc();
