class C0 {
    toString(a2) {
        arguments.callee = this;
    }
}
const v4 = new C0();
const v5 = new C0();
try { v5.hasOwnProperty(v4); } catch (e) {}
gc();
