const v2 = new Float64Array();
function f3() {
    return 64;
}
v2.constructor = f3;
v2.subarray(Float64Array >>> 64, 64);
gc();
