let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    let v2 = --v0;
    const v5 = Number.isNaN(v2--);
    v5 || v0;
    return v5;
}
const v9 = new Uint32Array(4046);
v9.reduce(f1);
gc();
