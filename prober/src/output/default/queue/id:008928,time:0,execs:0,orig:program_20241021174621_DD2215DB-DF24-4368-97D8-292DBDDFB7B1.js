function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
let v5 = /O\[\]\{\}\(\)\%\^\ /i;
function f6() {
    let v7 = --v5;
    const v9 = v7 ^ v7--;
    const v10 = v4 << v9;
    v10 + v10;
    return v9;
}
const v14 = new Uint32Array(4046);
v14.reduce(f6);
gc();
