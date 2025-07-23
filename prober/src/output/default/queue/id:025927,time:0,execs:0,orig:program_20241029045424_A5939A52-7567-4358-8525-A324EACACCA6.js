let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    const v4 = --v2;
    const v7 = ((v4 % v4) << 13) >>> 13;
    return v7 << v7;
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
