class C0 {
    valueOf(a2, a3) {
        const o5 = {
            "maxByteLength": a2,
        };
        new ArrayBuffer(6, o5);
    }
}
const v8 = new C0();
const v9 = new C0();
try { v9.valueOf(v8); } catch (e) {}
gc();
