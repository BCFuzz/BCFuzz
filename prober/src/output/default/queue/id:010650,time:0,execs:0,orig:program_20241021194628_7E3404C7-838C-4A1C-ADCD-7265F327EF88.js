let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v2 = --v0;
    const v3 = v2 % v2;
    const v4 = v3 << v3;
    const v5 = v4 + v4;
    v5 - v5;
    return v2;
}
const v9 = new Uint32Array(4046);
v9.reduce(f1);
gc();
