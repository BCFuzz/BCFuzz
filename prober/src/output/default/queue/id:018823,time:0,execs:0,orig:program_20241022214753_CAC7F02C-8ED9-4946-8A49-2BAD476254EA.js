let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    const v4 = --v2;
    return (186 << (v4 ^ v4)) + 1e-15;
}
const v10 = new Uint32Array(4046);
v10.reduce(f3);
gc();
