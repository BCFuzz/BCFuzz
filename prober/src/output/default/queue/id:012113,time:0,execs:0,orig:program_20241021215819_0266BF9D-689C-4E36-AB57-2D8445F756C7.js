function f0() {
    return f0;
}
const o1 = {
};
const o4 = {
    "maxByteLength": 536870912,
};
const v5 = new ArrayBuffer(o1, o4);
const v7 = new BigUint64Array(v5);
Object.defineProperty(v7, "constructor", { value: f0 });
gc();
