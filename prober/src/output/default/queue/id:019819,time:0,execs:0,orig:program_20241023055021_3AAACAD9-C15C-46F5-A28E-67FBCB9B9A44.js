function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
F1[0] = -14;
const v5 = new Uint32Array(F1);
function f6(a7, a8, a9, a10) {
    try { a7(f6, a8, Uint32Array, a10, a7); } catch (e) {}
    for (let v12 = 0; v12 < 5; v12++) {
        v5[0];
        v5[1];
    }
    return F1;
}
for (let v15 = 0; v15 < 50; v15++) {
    f6(f6);
}
gc();
