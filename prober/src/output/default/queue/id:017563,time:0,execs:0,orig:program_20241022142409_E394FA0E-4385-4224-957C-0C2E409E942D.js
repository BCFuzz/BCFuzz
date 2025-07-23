const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(1622, o2);
const v8 = new v5(v7);
function f9() {
    return createGlobalObject;
}
Object.defineProperty(v8, "constructor", { get: f9 });
v8.subarray();
gc();
