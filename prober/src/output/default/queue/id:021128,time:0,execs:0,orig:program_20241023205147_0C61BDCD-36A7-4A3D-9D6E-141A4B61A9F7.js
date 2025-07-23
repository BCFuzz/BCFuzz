function f0() {
    const v3 = new Uint8Array(Array);
    return v3.with();
}
Object.defineProperty(f0, Symbol.species, { configurable: true, value: f0 });
const o9 = {
    "maxByteLength": 5,
};
const v11 = new ArrayBuffer(5, o9);
const v13 = new Int32Array(v11);
v13.constructor = f0;
v13.subarray();
gc();
