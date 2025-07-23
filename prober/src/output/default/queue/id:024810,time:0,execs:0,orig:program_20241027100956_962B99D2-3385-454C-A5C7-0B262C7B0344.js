const v1 = Float32Array.bind();
const v3 = new v1(Int8Array);
function f4() {
    return Int8Array;
}
Object.defineProperty(v3, "constructor", { configurable: true, enumerable: true, get: f4 });
v3.slice(v1);
gc();
