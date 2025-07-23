let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v2 = --v0;
    let v3 = v2 ^ v2;
    v3--;
    const v5 = v3 << v3;
    return v5 + v5;
}
const v9 = new Uint32Array(4046);
v9.reduce(f1);
gc();
