const v1 = new Int8Array();
function f2() {
    return Int8Array;
}
v1.constructor = f2;
v1.subarray(Int8Array, v1);
gc();
