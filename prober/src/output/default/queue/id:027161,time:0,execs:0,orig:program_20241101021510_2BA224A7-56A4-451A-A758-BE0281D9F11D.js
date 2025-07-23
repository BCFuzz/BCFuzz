const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    a5++;
    const v10 = a5 ^ (a4 === a4);
    return v10 * v10;
}
v2.map(f3);
gc();
