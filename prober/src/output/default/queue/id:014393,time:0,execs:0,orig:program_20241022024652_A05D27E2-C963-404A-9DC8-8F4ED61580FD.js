function f0() {
    return f0;
}
function f1(a2, a3) {
    return -1693396780;
}
f0.valueOf = f1;
const v10 = new Float32Array([null,f0(),5.0,f0]);
v10.sort();
gc();
