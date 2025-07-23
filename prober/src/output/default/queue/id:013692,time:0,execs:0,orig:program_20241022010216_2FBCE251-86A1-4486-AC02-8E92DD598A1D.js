function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    createGlobalObject[Symbol.toPrimitive] = createGlobalObject;
    const t3 = createGlobalObject().Float16Array;
    const v12 = new t3();
    const v13 = v12.subarray();
    try { v13.set("p", createGlobalObject); } catch (e) {}
}
new F0(F0, F0, F0, F0);
gc();
