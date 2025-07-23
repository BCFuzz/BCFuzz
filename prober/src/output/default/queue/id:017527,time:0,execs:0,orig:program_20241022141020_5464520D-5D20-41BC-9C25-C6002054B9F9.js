const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v8 = a4++;
    const v9 = v8 * v8;
    for (let i = 0; i < 5; i++) {
    }
    return v9;
}
f3();
v2.map(f3);
gc();
