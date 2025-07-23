const o5 = {
    toString(a2, a3) {
        a2.global;
        return this;
    },
};
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
const o18 = {
    "maxByteLength": 3614,
};
const v20 = new SharedArrayBuffer(3614, o18);
const v22 = new Int32Array(v20);
const v25 = createGlobalObject().Atomics;
try { v25.xor(v22, undefined, o5); } catch (e) {}
gc();
