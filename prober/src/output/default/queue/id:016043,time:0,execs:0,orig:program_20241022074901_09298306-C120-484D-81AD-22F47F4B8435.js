function f0() {
    return f0;
}
const v1 = f0();
function f2() {
    return -1e-15;
}
v1.toString = f2;
const v8 = new Float32Array([null,v1,-2.220446049250313e-16,f0]);
v8.sort();
gc();
