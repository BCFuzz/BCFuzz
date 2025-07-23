const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    let v8 = -a4;
    v8--;
    return a7;
    arguments.valueOf = f3;
    return f3;
}
v2.map(f3);
gc();
