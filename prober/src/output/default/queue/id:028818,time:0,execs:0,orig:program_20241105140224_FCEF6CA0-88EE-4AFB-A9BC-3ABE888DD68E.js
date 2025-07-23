function f1() {
    return 268435440n;
}
const v2 = [1073741824,-54735,-1073741824,129,9,256];
v2[Symbol.toPrimitive] = f1;
const v7 = new BigUint64Array(256);
v7.subarray();
const v10 = createGlobalObject();
v10.Atomics.xor(v7, v10, v2);
gc();
