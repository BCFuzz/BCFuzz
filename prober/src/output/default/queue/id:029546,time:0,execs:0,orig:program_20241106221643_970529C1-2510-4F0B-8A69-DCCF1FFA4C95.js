function f0(a1, a2) {
    return f0;
}
const v4 = new Uint8ClampedArray();
const v6 = new Float32Array(v4, Uint8ClampedArray, Uint8ClampedArray);
class C7 {
}
function f8() {
    this.b = this;
    Object.defineProperty(this, C7, { configurable: true, enumerable: true, get: f0 });
    v4.__proto__ = this;
    const v11 = v4 | this;
    delete this.b;
    return v11;
}
const v15 = new Float64Array(1201);
v15.map(f8, v6);
gc();
