let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    const v4 = --v2;
    return 4294967296 - (((1964684094 % v4) << 1964684094) & v4);
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
