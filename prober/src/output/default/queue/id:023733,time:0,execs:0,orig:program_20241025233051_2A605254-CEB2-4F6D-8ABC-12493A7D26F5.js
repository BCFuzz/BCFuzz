const v1 = new Int16Array();
const v2 = v1.subarray();
const v4 = new BigUint64Array();
function f5(a6) {
    const v8 = new Float64Array();
    return v8.subarray().set(v2);
}
v4.constructor = f5;
const t8 = v4.constructor;
t8();
gc();
