const t0 = Float32Array.bind(Float32Array);
const v4 = new t0(Uint32Array);
function f5() {
    return Uint8Array;
}
Object.defineProperty(v4, "constructor", { configurable: true, enumerable: true, get: f5 });
v4.slice();
gc();
