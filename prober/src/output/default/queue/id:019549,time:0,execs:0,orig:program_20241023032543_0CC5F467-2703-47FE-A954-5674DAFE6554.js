function f0() {
    return f0;
}
const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    let v9 = a5 * a5;
    v9--;
    let v11 = -a5;
    v11--;
    return v11;
}
f4(f0);
v3.map(f4);
gc();
