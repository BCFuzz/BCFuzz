const v1 = ([-65536])[0];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
const v5 = v4[1];
const v7 = new BigInt64Array();
v7.fill(-2147483647n, v5, v1);
gc();
