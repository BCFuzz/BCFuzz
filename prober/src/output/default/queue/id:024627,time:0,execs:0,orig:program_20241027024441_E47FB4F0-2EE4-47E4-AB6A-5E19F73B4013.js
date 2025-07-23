function f0() {
    for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
    }
    const v14 = new Int16Array(1880);
    return createGlobalObject().Atomics.load(v14, 1);
}
for (let v19 = 0; v19 < 10; v19++) {
    f0();
}
gc();
