const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    let v8 = -a4;
    let v9 = v8--;
    v9++;
    let v11 = v9 - v9;
    try { v11.isExtensible(v2, a6); } catch (e) {}
    return v11--;
}
v2.map(f3);
gc();
