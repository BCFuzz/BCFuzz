const v1 = Symbol.toPrimitive;
function f3() {
    return v1;
}
Object.defineProperty(BigUint64Array, 1, { get: f3 });
try { new Uint8ClampedArray(BigUint64Array); } catch (e) {}
gc();
