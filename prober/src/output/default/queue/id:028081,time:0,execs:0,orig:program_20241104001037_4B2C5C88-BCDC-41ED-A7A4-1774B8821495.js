const v1 = [[]];
let v2 = /O\[\]\{\}\(\)\%\^\ /i;
function f3(a4) {
    return v1.length;
}
v2[Symbol.toPrimitive] = f3;
function f8() {
    --v2;
    const v11 = new Float64Array();
    v11[Symbol.toPrimitive] = f3;
    Number(v2).toExponential(v11);
    return v2;
}
const v18 = new Uint32Array(4046);
v18.reduce(f8);
gc();
