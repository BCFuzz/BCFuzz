function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const v8 = new Int32Array(681);
function f9(a10, a11, a12, a13) {
    return (typeof v5 === "object") + "object";
}
v8.map(f9);
gc();
