for (let i4 = 0, i5 = 10 + 10; i5--, i5;) {
    const v12 = createGlobalObject();
    let v13;
    try { v13 = v12.Function(createGlobalObject); } catch (e) {}
    try { v12.load(BigUint64Array, v13); } catch (e) {}
}
gc();
