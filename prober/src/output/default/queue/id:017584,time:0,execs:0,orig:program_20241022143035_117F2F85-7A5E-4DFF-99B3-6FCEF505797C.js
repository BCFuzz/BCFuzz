const v1 = new Uint16Array();
for (let i5 = 0, i6 = 10 + 10; i6--, i5 < i6;) {
    const v15 = createGlobalObject().Atomics;
    try { v15.add(v1); } catch (e) {}
}
gc();
