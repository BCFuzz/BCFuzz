function f1() {
    return 536870888n;
}
let v2 = /O\[\]\{\}\(\)\%\^\ /i;
v2.valueOf = f1;
function f3() {
    let v4 = --v2;
    const v7 = Number.isNaN(v4--);
    return v7 || v7;
}
new f3();
const v12 = new Uint32Array(4046);
v12.reduce(f3);
gc();
