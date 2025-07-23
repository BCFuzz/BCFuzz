function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new Uint32Array(F0);
function f5(a6, a7, a8, a9) {
    try { a6(); } catch (e) {}
    for (let v11 = 0; v11 < 5; v11++) {
        v4[0];
        v4[1];
    }
    return f5;
}
for (let v14 = 0; v14 < 50; v14++) {
    f5(f5);
}
gc();
