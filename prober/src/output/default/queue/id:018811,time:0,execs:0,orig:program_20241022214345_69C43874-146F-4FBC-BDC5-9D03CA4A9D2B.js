class C1 {
}
class C2 extends C1 {
    static toString(a4, a5) {
        Object.defineProperty(this, -2147483649, { value: a4 });
        super[-2147483649] = this;
    }
}
try { C2.toString(C1, -2147483649); } catch (e) {}
gc();
