function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f6(a7) {
    return 16;
}
F1.valueOf = f6;
const o8 = {
};
const v11 = new Int32Array(256);
const v12 = new Int32Array(256);
v12.copyWithin(o8, F1, v11);
gc();
