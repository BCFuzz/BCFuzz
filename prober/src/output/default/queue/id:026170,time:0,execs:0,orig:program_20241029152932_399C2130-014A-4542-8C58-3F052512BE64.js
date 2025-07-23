class C1 extends ArrayBuffer {
    m(a3, a4) {
        super.byteLength;
    }
}
const v6 = C1.prototype;
try { v6.m(C1, ArrayBuffer, v6); } catch (e) {}
gc();
