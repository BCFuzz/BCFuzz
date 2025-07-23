const v1 = new Int16Array();
const t1 = v1.constructor;
const v4 = new t1(1);
for (let i8 = 0, i9 = 10 + 10; i9--, i8 < i9;) {
    createGlobalObject().Atomics.xor(v4);
}
gc();
