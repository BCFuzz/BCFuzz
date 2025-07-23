async function f0(a1, a2, a3, a4) {
    return f0;
}
function f5(a6) {
    const v8 = new Uint8Array();
    const v9 = v8.slice();
    try { v9.set(a6); } catch (e) {}
    return Uint8Array;
}
f0.then = f5;
f0();
gc();
