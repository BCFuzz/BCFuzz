let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    return 4294967296 - (((-65536 % --v2) << -65536) & 4294967296);
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
