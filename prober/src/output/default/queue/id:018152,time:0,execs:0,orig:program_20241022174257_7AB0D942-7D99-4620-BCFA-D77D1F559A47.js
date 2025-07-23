let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    const v2 = --v0;
    const v3 = v2 >>> v2;
    v3 != v3;
}
const v7 = new Uint32Array(4046);
v7.reduce(f1);
gc();
