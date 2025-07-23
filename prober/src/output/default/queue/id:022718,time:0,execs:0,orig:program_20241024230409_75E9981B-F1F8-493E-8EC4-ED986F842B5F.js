const v1 = new Int16Array();
function f2(a3, a4) {
    return f2;
}
f2[Symbol.species] = Int16Array;
v1.constructor = f2;
v1.subarray();
gc();
