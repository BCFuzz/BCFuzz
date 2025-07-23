for (let i3 = 0, i4 = 10 + 10; i4--, i3 < i4;) {
    const v12 = createGlobalObject();
    try { v12.load(); } catch (e) {}
}
gc();
