function f0() {
    return f0;
}
const v1 = f0.bind(f0, f0);
const v4 = new Int32Array(681);
function f5(a6, a7, a8, a9) {
    a8.forEach(v1);
    return f5;
}
v4.map(f5);
gc();
