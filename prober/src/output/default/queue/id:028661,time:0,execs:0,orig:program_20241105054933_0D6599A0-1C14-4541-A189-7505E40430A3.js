class C1 extends ArrayBuffer {
    m(a3, a4) {
        const v5 = a3.m;
        try { v5(v5); } catch (e) {}
        super.resizable &&= v5;
    }
}
const v7 = C1.prototype;
try { v7.m(v7); } catch (e) {}
gc();
