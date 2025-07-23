let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    return ((-65536 % --v2) << -65536) + 16;
}
const v10 = new Uint32Array(4046);
v10.reduce(f3);
gc();
