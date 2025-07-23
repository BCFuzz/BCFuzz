const v3 = new Uint8ClampedArray(Uint32Array);
function f4() {
    return Float32Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, enumerable: true, get: f4 });
v3.slice();
gc();
