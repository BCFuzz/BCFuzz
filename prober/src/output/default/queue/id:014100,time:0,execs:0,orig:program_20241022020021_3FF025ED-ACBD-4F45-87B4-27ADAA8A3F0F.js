let v3 = /O\[\]\{\}\(\)\%\^\ /i;
function f4() {
    return 4294967296 - (((-65536 % --v3) << -65536) + 16);
}
const v12 = new Uint32Array(4046);
v12.reduce(f4);
gc();
