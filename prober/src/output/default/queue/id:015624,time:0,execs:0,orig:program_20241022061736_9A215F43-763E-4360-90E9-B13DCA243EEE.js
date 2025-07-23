const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(1622, o2);
const v8 = new v5(v7);
function f9(a10, a11) {
    return v8;
}
v8.valueOf = f9;
gc();
