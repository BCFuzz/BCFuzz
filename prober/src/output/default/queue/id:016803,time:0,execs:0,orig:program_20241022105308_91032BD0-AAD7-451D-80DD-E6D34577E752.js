const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    a5--;
    let v10 = -a5;
    let v12 = v10-- - 2;
    v12++;
    return v10;
}
v3.map(f4);
gc();
