const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    try { a6.constructor(v2, v2); } catch (e) {}
    const v11 = Symbol.toStringTag;
    const v12 = v11.description;
    arguments[v11] = a5;
    eval(v12);
    return f3;
}
v2.map(f3);
gc();
