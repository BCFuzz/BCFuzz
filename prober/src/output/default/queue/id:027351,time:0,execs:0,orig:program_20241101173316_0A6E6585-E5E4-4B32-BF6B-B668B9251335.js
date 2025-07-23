let v1 = /O\[\]\{\}\(\)\%\^\ /i;
function f2() {
    const v4 = --v1 || v1;
    return (v4 << v4) >> -63881;
}
const v9 = new Uint16Array(4046);
v9.reduce(f2);
gc();
