class C0 {
    m(a2) {
        const v5 = new SharedArrayBuffer(1);
        new BigInt64Array(v5);
    }
}
const v8 = new C0();
try { v8.m(C0, v8, v8, v8, v8); } catch (e) {}
gc();
