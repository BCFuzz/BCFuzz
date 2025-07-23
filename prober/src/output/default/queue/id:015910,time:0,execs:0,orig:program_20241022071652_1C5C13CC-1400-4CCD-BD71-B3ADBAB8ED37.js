let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v2 = --v0;
    const v4 = Number.isNaN(v0);
    const v5 = v2 ^ v2;
    v4 + (v5 << v5);
    return v4;
}
const v10 = new Uint32Array(4046);
v10.reduce(f1);
gc();
