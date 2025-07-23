const v1 = new BigUint64Array();
function f2() {
    return BigUint64Array;
}
v1.constructor = f2;
v1["subarray"]();
gc();
