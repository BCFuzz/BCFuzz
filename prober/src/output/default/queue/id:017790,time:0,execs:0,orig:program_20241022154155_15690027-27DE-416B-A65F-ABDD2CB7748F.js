const v2 = new Int16Array(128);
function f3() {
    const v5 = new Uint32Array();
    const v6 = [...v5];
    try { v6.findIndex(f3, v5); } catch (e) {}
    return Uint32Array;
}
v2.sort(f3);
gc();
