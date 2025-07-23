class C0 {
}
const v1 = new C0();
function f3() {
    v1.__proto__ = v1;
    return BigUint64Array;
}
Object.defineProperty(BigUint64Array, 1, { get: f3 });
try { new Uint8ClampedArray(BigUint64Array); } catch (e) {}
gc();
