const o2 = {
    "maxByteLength": 1073741824,
};
function f4() {
    const v6 = new Float64Array(ArrayBuffer);
    return v6;
}
createGlobalObject[Symbol.species] = f4;
const v10 = createGlobalObject().Float16Array;
const v12 = new ArrayBuffer(1622, o2);
const v13 = new v10(v12);
function f14() {
    return createGlobalObject;
}
Object.defineProperty(v13, "constructor", { get: f14 });
v13.subarray();
gc();
