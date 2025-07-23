function f0(a1, a2) {
    for (let v3 = 0; v3 < 100; v3++) {
    }
    class C4 {
    }
    const v5 = new C4();
    const v6 = v5.constructor;
    const v7 = new v6();
    const v8 = v7.__defineSetter__;
    v8.name = v8;
    for (let i = 0; i < 5; i++) {
        const v11 = new SharedArrayBuffer();
        const v13 = new DataView(v11);
        try { v13.setUint32(256, v8); } catch (e) {}
    }
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
    return v6;
}
f0();
f0();
gc();
