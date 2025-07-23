const v1 = [0.2625477294791636];
function f2(a3) {
    class C4 extends a3 {
    }
    return C4;
}
v1.constructor = f2;
const v5 = v1.constructor;
try { v5("-9007199254740991"); } catch (e) {}
gc();
