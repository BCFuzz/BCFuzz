function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = /O\[\]\{\}\(\)\%\^\ /i;
function f6() {
    const v7 = -v5;
    v4 << (v7 ^ ~v7);
    return F0;
}
const v13 = new Uint32Array(4046);
v13.reduce(f6);
gc();
