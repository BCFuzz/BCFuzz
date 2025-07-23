const v2 = new Uint8Array();
const v3 = new BigUint64Array();
function f4() {
    return 257;
}
v3[Symbol.toPrimitive] = f4;
delete v2[v3];
gc();
