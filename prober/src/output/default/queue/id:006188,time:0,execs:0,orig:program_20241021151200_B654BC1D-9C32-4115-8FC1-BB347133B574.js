let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v3 = --v0;
    const v4 = v3 ^ v3;
    v4 << v4;
    [false];
}
const v9 = new Uint32Array(4046);
v9.reduce(f1);
gc();
