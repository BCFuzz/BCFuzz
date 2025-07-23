for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const t2 = Float32Array.bind();
const v13 = new t2(Int16Array);
function f14() {
    return Int16Array;
}
Object.defineProperty(v13, "constructor", { configurable: true, enumerable: true, get: f14 });
v13.slice();
gc();
