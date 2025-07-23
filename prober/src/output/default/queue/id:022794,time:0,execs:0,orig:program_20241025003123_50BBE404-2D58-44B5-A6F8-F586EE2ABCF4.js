function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(-35761, -35761);
let v6 = /O\[\]\{\}\(\)\%\^\ /i;
function f7() {
    const v11 = -35761 | (--v6 ^ v6--);
    v5 << v11;
    return v11;
}
const v15 = new Uint32Array(4046);
v15.reduce(f7);
gc();
