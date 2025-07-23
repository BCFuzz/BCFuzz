function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
let v5 = /O\[\]\{\}\(\)\%\^\ /i;
function f6() {
    let v7 = --v5;
    const v9 = v7 ^ v7--;
    const v10 = v9 >>> v9;
    const v11 = v4 << v9;
    function f12(a13, a14, a15) {
        return v10;
    }
    f12(v4, v11, v10);
    return v7;
}
const v19 = new Uint32Array(4046);
v19.reduce(f6);
gc();
