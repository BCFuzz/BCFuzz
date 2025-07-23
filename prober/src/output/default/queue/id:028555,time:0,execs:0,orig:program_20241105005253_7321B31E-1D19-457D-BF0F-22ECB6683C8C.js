const v2 = new Uint16Array(7);
function f3(a4, a5) {
    return Uint16Array;
}
v2.toString = f3;
for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
    const v17 = createGlobalObject();
    const v18 = v17.Atomics;
    try { v18.xor(v2, v17, v2); } catch (e) {}
}
gc();
