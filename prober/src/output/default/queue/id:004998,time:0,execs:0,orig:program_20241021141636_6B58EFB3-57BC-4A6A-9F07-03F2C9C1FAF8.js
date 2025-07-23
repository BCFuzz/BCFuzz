const v2 = new Uint32Array();
function f3() {
    return Float32Array;
}
Object.defineProperty(v2, "constructor", { configurable: true, enumerable: true, get: f3 });
v2.slice();
gc();
