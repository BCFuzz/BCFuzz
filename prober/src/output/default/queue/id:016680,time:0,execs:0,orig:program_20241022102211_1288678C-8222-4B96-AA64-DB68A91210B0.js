class C1 {
    m(a3) {
        function f4(a5) {
            return Math.cos(this);
        }
        this[Symbol.toPrimitive] = f4;
        super[this] = "16";
    }
}
const v10 = new C1();
try { v10.m(v10, v10, C1, "16"); } catch (e) {}
gc();
