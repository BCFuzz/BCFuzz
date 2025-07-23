const v2 = new BigUint64Array(132);
for (let i6 = 0, i7 = 10 + 10; i7--, i6 < i7;) {
    const v16 = createGlobalObject().Atomics;
    try { v16.compareExchange(v2); } catch (e) {}
}
gc();
