function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
const o6 = {
    "maxByteLength": 1682438444,
};
const v8 = new ArrayBuffer(1095, o6);
const v10 = new Int8Array(v8);
Object.defineProperty(v10, 1000.0, { configurable: true, enumerable: true, value: v3 });
gc();
