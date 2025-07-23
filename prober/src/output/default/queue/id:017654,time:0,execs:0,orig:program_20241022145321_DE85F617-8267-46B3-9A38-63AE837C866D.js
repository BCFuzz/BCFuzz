function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function f5() {
    return v4;
}
f5.omitPadding = v4;
const v8 = new Uint8Array(681);
function f9(a10, a11, a12, a13) {
    a12.toBase64(f5);
    return f5;
}
v8.map(f9);
gc();
