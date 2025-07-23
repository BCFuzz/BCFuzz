let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    let v2 = --v0;
    const v3 = v2--;
    new Number();
    const v6 = Number.isInteger(v3);
    v6 || v6;
    return f1;
}
const v10 = new Uint32Array(4046);
v10.reduce(f1);
gc();
