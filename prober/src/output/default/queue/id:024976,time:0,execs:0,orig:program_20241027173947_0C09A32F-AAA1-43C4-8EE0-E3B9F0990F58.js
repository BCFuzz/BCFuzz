let v1 = /O\[\]\{\}\(\)\%\^\ /i;
function f2() {
    return -35761 | ~(--v1);
}
const v8 = new Uint32Array(4046);
v8.reduce(f2);
gc();
