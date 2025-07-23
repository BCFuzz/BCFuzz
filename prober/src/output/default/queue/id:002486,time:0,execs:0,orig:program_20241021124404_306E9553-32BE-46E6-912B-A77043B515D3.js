const v1 = new WeakSet();
function f2(a3, a4) {
    class C5 extends a4 {
    }
    return f2;
}
v1.constructor = f2;
const v6 = v1.constructor;
try { v6(); } catch (e) {}
gc();
