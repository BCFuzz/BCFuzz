const v1 = new Uint8ClampedArray();
function f2() {
    return v1;
}
v1.toString = f2;
class C3 extends Uint8ClampedArray {
}
const v4 = new C3();
try { v4.copyWithin(v1); } catch (e) {}
gc();
