let v4 = /O\[\]\{\}\(\)\%\^\ /i;
function f5() {
    return 11;
}
v4[Symbol.toPrimitive] = f5;
function f8() {
    const v9 = --v4;
    v9 ** v9;
    "CcB" - (v9 >>> (13 >>> 13));
    return v9;
}
const v15 = new Uint32Array(2643);
v15.reduce(f8);
gc();
