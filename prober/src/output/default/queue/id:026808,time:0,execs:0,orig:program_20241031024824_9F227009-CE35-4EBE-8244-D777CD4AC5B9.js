class C1 extends ArrayBuffer {
    m(a3, a4) {
        super.resizable <<= a4;
    }
}
const v5 = C1.prototype;
try { v5.m(); } catch (e) {}
gc();
