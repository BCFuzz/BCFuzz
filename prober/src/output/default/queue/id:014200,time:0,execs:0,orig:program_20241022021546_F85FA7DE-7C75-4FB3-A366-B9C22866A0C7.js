function f0() {
    return f0;
}
const v6 = new Float32Array([null,f0(),-2.220446049250313e-16,f0,null]);
v6.sort();
gc();
