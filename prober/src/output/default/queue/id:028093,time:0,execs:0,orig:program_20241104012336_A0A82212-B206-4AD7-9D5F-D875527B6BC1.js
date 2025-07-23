function f0() {
    for (let i3 = 0, i4 = 10; i3 < i4; --i4) {
    }
    const v14 = new Uint16Array(1880);
    createGlobalObject().Atomics.load(v14, 1);
    return f0;
}
for (let v19 = 0; v19 < 10; v19++) {
    f0();
}
gc();
