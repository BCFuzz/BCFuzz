let v0 = /O\[\]\{\}\(\)\%\^\ /i;
function f1() {
    let v2 = --v0;
    return Number.isNaN(v2--);
}
new f1();
const v9 = new Uint32Array(4046);
v9.reduce(f1);
gc();
