function f0(a1, a2) {
    for (let v3 = 0; v3 < 100; v3++) {
    }
    class C4 {
    }
    const v5 = new C4();
    const t6 = v5.constructor;
    const v7 = new t6();
    const v8 = v7.__defineSetter__;
    const v11 = Uint16Array ^ [-10];
    for (let i = 0; i < 5; i++) {
        const o14 = {
            "maxByteLength": 256,
        };
        const v16 = new SharedArrayBuffer(256, o14);
        const v18 = new DataView(v16);
        try { v18.setUint32(256, v8); } catch (e) {}
        try { v18.getUint8(v11); } catch (e) {}
    }
    for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
    }
    return v11;
}
f0();
f0();
gc();
