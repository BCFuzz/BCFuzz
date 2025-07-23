function f0() {
    return f0;
}
function f1(a2) {
}
f0.next = f1;
class C3 extends f0 {
    static toString(a5, a6, a7) {
        function f9() {
            return this;
        }
        this[Symbol.iterator] = f9;
    }
}
C3.toString(f0, f0, C3, f0);
const v14 = new Uint8Array();
const v15 = v14.constructor;
try { new v15(C3); } catch (e) {}
gc();
