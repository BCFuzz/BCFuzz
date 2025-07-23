const v2 = new Int16Array(129);
v2.subarray(129, 129);
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    createGlobalObject().Atomics.store(v2);
}
gc();
