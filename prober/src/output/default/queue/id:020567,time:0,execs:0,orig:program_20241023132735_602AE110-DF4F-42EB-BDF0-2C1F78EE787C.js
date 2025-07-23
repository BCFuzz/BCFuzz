const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const v10 = new WeakSet();
    const v12 = new Float32Array();
    let v13;
    try { v13 = v12.set(v10, 9007199254740991); } catch (e) {}
    return v13;
}
v2.map(f3);
gc();
