const v2 = new Uint16Array(129);
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
    const o18 = {
        toString(a14, a15) {
            return eval(a14);
        },
    };
    const v21 = createGlobalObject().Atomics;
    try { v21.add(); } catch (e) {}
    v21.store(v2, i5, i6);
}
const v26 = new BigUint64Array(586);
for (const v27 of v26) {
}
gc();
