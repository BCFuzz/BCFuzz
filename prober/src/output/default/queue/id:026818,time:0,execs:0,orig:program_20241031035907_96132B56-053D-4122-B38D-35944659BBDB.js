class C1 extends ArrayBuffer {
    m(a3, a4) {
        const v5 = a3.m;
        try { v5(v5); } catch (e) {}
        super.maxByteLength;
    }
}
const v8 = C1.prototype;
try { v8.m(v8); } catch (e) {}
gc();
