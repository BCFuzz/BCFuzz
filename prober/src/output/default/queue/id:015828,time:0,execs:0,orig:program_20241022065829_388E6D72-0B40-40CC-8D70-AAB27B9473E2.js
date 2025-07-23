function f0() {
    for (let v1 = 0; v1 < 10; v1++) {
        class C2 {
        }
        const v4 = new SharedArrayBuffer();
        const v6 = new DataView(v4);
        try { v6.getUint16(v6, C2); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            for (let v8 = 0; v8 < 10; v8++) {
            }
        }
    }
    return f0;
}
f0();
f0();
f0();
f0();
gc();
