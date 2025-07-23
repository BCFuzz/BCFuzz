class C1 extends Int8Array {
    m(a3, a4) {
        super.byteLength;
    }
}
const v6 = C1.prototype;
try { v6.m(); } catch (e) {}
gc();
