function f0() {
    return f0;
}
const o5 = {
    "maxByteLength": 416,
};
const v7 = new SharedArrayBuffer(116, o5);
const v8 = new Float64Array(v7);
Object.defineProperty(v8, 0, { writable: true, enumerable: true, value: f0 });
gc();
