const v3 = new Int32Array(Uint32Array);
function f4() {
    return Float32Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, enumerable: true, get: f4 });
v3.slice();
gc();
