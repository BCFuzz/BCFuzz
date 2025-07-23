function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
const o6 = {
    "maxByteLength": 4006,
};
const v8 = new SharedArrayBuffer(15, o6);
const v10 = new Uint8Array(v8);
Object.defineProperty(v10, 0, { value: v3 });
gc();
