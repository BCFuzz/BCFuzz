const t0 = Float32Array.bind();
const v3 = new t0(Uint32Array);
function f4() {
    return Uint32Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, enumerable: true, get: f4 });
v3.slice();
gc();
