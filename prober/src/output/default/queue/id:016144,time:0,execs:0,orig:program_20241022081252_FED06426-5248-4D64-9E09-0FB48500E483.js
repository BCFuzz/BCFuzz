const v2 = new Uint16Array(512);
v2[442] = v2;
for (let i5 = 0, i6 = 10; i6--, i5 < i6;) {
    createGlobalObject().Atomics.sub(v2);
    for (let v17 = 0; v17 < 25; v17++) {
    }
}
gc();
