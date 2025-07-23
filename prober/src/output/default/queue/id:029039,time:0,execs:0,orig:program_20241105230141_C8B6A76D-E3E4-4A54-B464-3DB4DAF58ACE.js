function f1() {
    return 268435440n;
}
const v2 = [1073741824,-54735,-1073741824,129,9,256];
v2[Symbol.toPrimitive] = f1;
const v7 = new BigUint64Array(256);
const v9 = createGlobalObject();
v9.Atomics.xor(v7, v9, v2);
gc();
