const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    let v8;
    try { v8 = a6.map(); } catch (e) {}
    arguments[Symbol.toStringTag] = v8;
}
v2.map(f3);
gc();
