let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    let v3 = --v0;
    Number.isNaN(v3--);
    const v7 = v3 ^ v3;
    const v8 = v7 << v7;
    const v9 = v8 + v8;
    [false];
    return v9;
}
const v13 = new Uint32Array(4046);
v13.reduce(f1);
gc();
