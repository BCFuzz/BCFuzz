const v1 = new BigInt64Array();
const v2 = v1.buffer;
function f3(a4) {
    return a4;
}
v2.constructor = f3;
v2.slice(v2, BigInt64Array);
gc();
