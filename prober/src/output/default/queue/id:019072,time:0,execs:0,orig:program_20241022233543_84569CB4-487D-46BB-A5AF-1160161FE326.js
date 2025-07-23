function f0() {
    return f0;
}
const v3 = new BigUint64Array(586);
for (const v4 of v3) {
    const v6 = new WeakSet();
    v6.add(v6);
    v6[Symbol.toPrimitive] = f0;
}
gc();
