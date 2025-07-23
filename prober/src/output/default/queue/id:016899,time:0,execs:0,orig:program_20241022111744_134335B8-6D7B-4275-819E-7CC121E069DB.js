let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    let v8 = 4294967296 - (((-65536 % --v2) << -65536) + 4294967296);
    v8++;
    return v8;
}
const v12 = new Uint32Array(4046);
v12.reduce(f3);
gc();
