const t0 = Int32Array.bind(Int32Array, Int32Array, Int32Array, Int32Array, Int32Array);
const v3 = new t0(Uint16Array);
function f4() {
    return Uint16Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, enumerable: true, get: f4 });
v3.slice();
gc();
