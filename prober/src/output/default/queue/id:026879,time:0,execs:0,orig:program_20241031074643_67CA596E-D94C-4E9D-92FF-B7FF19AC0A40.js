function f2() {
    Uint8ClampedArray(Uint8ClampedArray, Uint32Array, Uint8ClampedArray);
    return Uint8ClampedArray;
}
function f5(a6) {
    return Uint32Array;
}
Object.defineProperty(Uint32Array, 2, { configurable: true, enumerable: true, get: f2, set: f5 });
try { new Uint8Array(Uint32Array); } catch (e) {}
gc();
