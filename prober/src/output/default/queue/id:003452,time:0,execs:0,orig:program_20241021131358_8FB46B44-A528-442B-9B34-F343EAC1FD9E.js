const v1 = new Float32Array();
function f2(a3) {
    return a3;
}
v1.valueOf = f2;
v1.slice(f2, v1);
gc();
