function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = new C2();
const v5 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
function f6() {
    return v3;
}
v5[Symbol.toPrimitive] = f6;
try { new Uint16Array(v5, 11, v5); } catch (e) {}
gc();
