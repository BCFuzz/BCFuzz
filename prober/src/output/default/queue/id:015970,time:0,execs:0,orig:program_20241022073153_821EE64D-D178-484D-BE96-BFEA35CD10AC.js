const v2 = new Int16Array(15);
function f4() {
    const v5 = new Int8Array(15);
    const v7 = new Uint16Array();
    try { v7.set(v5); } catch (e) {}
    return v2;
}
v2.sort(f4);
gc();
