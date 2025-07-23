function f0() {
}
class C1 extends f0 {
    o(a3, a4, a5, a6) {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            a9.arguments = a9;
        }
        new F7(F7);
    }
}
const v12 = new C1();
try { v12.o(); } catch (e) {}
gc();
