class C0 {
    o(a2, a3) {
        const v6 = new SharedArrayBuffer();
        const v8 = new DataView(v6);
        v8.getFloat64(undefined, a2);
    }
}
const v10 = new C0();
try { v10.o(); } catch (e) {}
gc();
