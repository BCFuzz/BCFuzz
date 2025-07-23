class C0 {
    valueOf(a2, a3) {
        let v1 = this;
        v1 |= v1;
    }
}
const v4 = new C0();
try { v4.valueOf(); } catch (e) {}
gc();
