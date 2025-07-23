function f1() {
    Uint8ClampedArray(f1, Uint8ClampedArray, Uint32Array);
    return Uint32Array;
}
function f4(a5) {
    return f1;
}
Object.defineProperty(Uint32Array, 2, { configurable: true, enumerable: true, get: f1, set: f4 });
try { new Uint32Array(Uint32Array); } catch (e) {}
gc();
