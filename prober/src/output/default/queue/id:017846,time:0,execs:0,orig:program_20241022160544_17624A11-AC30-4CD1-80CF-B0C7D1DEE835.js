const v2 = new Int32Array(Uint32Array);
function f3() {
    return Uint32Array;
}
Object.defineProperty(v2, "constructor", { configurable: true, enumerable: true, get: f3 });
v2.slice(Int32Array);
gc();
