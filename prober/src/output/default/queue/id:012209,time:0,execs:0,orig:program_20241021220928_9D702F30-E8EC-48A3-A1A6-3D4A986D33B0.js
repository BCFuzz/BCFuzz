let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v2 = --v0;
    const v3 = v2 ^ v2;
    const v4 = v3 ** v0;
    v4 ^ v4;
    return v3;
}
const v8 = new Uint32Array(4046);
v8.reduce(f1);
gc();
