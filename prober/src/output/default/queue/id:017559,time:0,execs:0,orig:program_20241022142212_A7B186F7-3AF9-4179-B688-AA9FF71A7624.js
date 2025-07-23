const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(1622, o2);
const v8 = new v5(v7);
function f9(a10) {
    return v7;
}
Object.defineProperty(v8, Symbol.toPrimitive, { writable: true, value: f9 });
gc();
