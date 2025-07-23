const v2 = new Float64Array(Uint32Array);
function f3() {
    return Uint32Array;
}
Object.defineProperty(v2, "constructor", { configurable: true, enumerable: true, get: f3 });
v2.slice(v2);
gc();
