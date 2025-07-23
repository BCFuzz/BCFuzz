const v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3() {
    const v6 = (268435456 % ~v2) / 13;
    const v7 = v6 + v6;
    v7 * v7;
    return f3;
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
