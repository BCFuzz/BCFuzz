for (let i = 0; i < 5; i++) {
    class C0 {
    }
    const v1 = C0.apply;
    try { v1(); } catch (e) {}
    const v5 = Uint16Array ^ [1073741824,-4294967295,-1013382384,9223372036854775807,4096,23819,9007199254740990,-9007199254740992];
    const v7 = new Uint16Array(512);
    for (let i = 0; i < 5; i++) {
        const v10 = new SharedArrayBuffer(256);
        const v12 = new DataView(v10);
        v12.getUint8(v5);
    }
    for (const v14 of v7) {
    }
}
gc();
