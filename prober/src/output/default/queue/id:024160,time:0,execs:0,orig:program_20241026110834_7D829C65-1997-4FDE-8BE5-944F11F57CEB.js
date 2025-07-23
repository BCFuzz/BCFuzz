function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
v5.b = Int8Array;
const v6 = new F1(v5, v5);
function f7() {
    return v5.b;
}
const v11 = new Int32Array(681);
const o12 = {
    "get": f7,
};
const v14 = new Proxy(v6, o12);
function f15(a16, a17, a18, a19) {
    const v20 = [v14];
    try { v20.toLocaleString(); } catch (e) {}
    return 681;
}
v11.map(f15);
gc();
