for (let i = 0; i < 5; i++) {
    const v1 = createGlobalObject();
    const v2 = v1.Float16Array;
    const v3 = new v2(v1, v2, v2, createGlobalObject, v2);
    v3.subarray();
}
gc();
