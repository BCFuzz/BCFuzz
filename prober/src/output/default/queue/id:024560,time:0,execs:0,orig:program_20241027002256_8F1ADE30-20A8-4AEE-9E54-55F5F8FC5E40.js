let v1 = /O\[\]\{\}\(\)\%\^\ /i;
function f2() {
    return -35761 | (--v1 | ~v1);
}
const v9 = new Uint32Array(4046);
v9.reduce(f2);
gc();
