const v1 = new WeakMap();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
    const v13 = new Uint8ClampedArray(i5, i4);
    v1.set(v13);
}
gc();
