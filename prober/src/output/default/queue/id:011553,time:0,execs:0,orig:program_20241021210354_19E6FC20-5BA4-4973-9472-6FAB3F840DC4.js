for (let i3 = 0, i4 = 10 + 10; i4--, i3 < i4;) {
    const v13 = createGlobalObject().Atomics;
    try { v13.load(createGlobalObject, v13); } catch (e) {}
    for (let v15 = 0; v15 < 250; v15++) {
    }
}
gc();
