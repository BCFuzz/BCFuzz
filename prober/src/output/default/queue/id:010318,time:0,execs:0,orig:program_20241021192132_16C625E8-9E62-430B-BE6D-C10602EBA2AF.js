const v2 = new Int32Array(681);
function f3(a4, a5, a6, a7) {
    const t2 = a6.constructor;
    new t2(a7);
    try { a6.constructor(); } catch (e) {}
    const v13 = Symbol.toStringTag;
    v13.description;
    arguments[v13] = a5;
    eval(a7);
    return arguments;
}
v2.map(f3);
gc();
