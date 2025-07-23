function f1() {
    return 536870888n;
}
let v2 = /O\[\]\{\}\(\)\%\^\ /i;
v2.valueOf = f1;
function f3() {
    let v4 = --v2;
    const v7 = Number.isNaN(v4--);
    v7 || v7;
    return Number;
}
const v11 = new Uint32Array(4046);
v11.reduce(f3);
gc();
