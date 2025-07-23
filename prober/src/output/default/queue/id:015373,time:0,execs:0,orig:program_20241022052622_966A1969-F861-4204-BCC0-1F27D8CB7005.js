for (let i3 = 0, i4 = 10 + 10; i4--, i4;) {
    i3 **= i3;
    const v11 = createGlobalObject();
    const v12 = v11.Atomics;
    try { v12.load(createGlobalObject, v12, v12, v12, v11); } catch (e) {}
    for (let v14 = 0; v14 < 250; v14++) {
    }
}
gc();
