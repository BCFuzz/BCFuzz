function f0(a1, a2) {
    return a2;
}
const o5 = {
    "maxByteLength": 527,
};
const v7 = new ArrayBuffer(527, o5);
const v9 = new Int16Array(v7);
Object.defineProperty(v9, "length", { enumerable: true, set: f0 });
gc();
