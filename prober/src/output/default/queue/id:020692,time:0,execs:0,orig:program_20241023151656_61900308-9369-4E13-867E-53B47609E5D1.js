function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v5 = new F0(F0, v4);
function f6() {
    const v7 = v4.b;
    Object.defineProperty(v7, 512, { writable: true, enumerable: true, value: v7 });
    return f6;
}
const v10 = new Int32Array(681);
const o11 = {
    "get": f6,
};
const v13 = new Proxy(v5, o11);
function f14(a15, a16, a17, a18) {
    const v21 = ["YlW",904623.0599490013];
    let v22;
    try { v22 = v21.toLocaleString("YlW", v13); } catch (e) {}
    return v22;
}
v10.map(f14);
gc();
