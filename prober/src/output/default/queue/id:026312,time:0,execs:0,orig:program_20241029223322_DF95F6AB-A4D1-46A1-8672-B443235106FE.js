const v1 = new Int16Array();
const t1 = v1.constructor;
const v4 = new t1(1);
v4.subarray();
for (let i9 = 0, i10 = 10 + 10; i10--, i9 < i10;) {
    createGlobalObject().Atomics.xor(v4);
}
gc();
