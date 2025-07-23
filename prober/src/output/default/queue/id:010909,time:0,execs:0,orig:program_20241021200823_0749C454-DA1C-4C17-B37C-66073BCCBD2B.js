function f0(a1) {
    return a1;
}
const o4 = {
    "maxByteLength": 1073741824,
};
const v6 = new ArrayBuffer(1024, o4);
const v8 = new Uint32Array(v6);
Object.defineProperty(v8, "valueOf", { writable: true, configurable: true, value: f0 });
gc();
