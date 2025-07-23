let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    let v2 = --v0;
    v2++;
    let v4 = v2--;
    v4++;
    const v7 = Number.isNaN(v4);
    v7 && v7;
    return v4;
}
const v11 = new Uint32Array(4046);
v11.reduce(f1);
gc();
