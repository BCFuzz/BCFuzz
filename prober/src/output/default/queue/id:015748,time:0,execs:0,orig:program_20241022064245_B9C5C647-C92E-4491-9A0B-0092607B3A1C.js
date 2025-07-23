for (let i3 = 0, i4 = 10 + 10; i4--, i3 < i4;) {
    const v12 = createGlobalObject();
    const v13 = v12.Atomics;
    try { v13.xor(v12, i4, i4); } catch (e) {}
    for (let v15 = 0; v15 < 250; v15++) {
    }
}
gc();
