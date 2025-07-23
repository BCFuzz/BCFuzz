function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
const v6 = new F1("undefined", v5);
function f7() {
    const v8 = v5.b;
    Object.defineProperty(v8, 512, { writable: true, enumerable: true, value: "undefined" });
    return v8;
}
const v11 = new Int32Array(681);
const o12 = {
    "get": f7,
};
const v14 = new Proxy(v6, o12);
function f15(a16, a17, a18, a19) {
    const v20 = [v14];
    let v21;
    try { v21 = v20.toLocaleString(); } catch (e) {}
    return v21;
}
v11.map(f15);
gc();
