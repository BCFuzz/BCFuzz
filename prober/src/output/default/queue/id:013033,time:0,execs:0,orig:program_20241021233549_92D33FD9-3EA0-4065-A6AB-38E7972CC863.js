function f0(a1, a2) {
    class C3 {
    }
    const v4 = new C3();
    const t4 = v4.constructor;
    const v6 = new t4(f0, C3);
    const v7 = v6.__defineSetter__;
    for (let i = 0; i < 5; i++) {
        const v10 = new SharedArrayBuffer(a1, v6);
        const v12 = new DataView(v10);
        try { v12.setUint32(256, v7); } catch (e) {}
    }
    for (let i16 = -1716696, i17 = 10; i16 < i17; i17--) {
    }
    return a2;
}
f0();
gc();
