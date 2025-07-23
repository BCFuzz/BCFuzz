function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        return a2;
    }
    class C4 extends f3 {
        #m(a6) {
        }
    }
    new C4();
    new C4();
}
const v9 = new F0();
const v10 = v9.constructor;
try { new v10(v9); } catch (e) {}
gc();
