for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v12 = new Int32Array(252);
function f13(a14, a15, a16, a17) {
    const v18 = a16.constructor;
    new v18(v18);
    try { a16.constructor(); } catch (e) {}
    new SharedArrayBuffer();
    const v24 = Symbol.toStringTag;
    Symbol.for();
    v24.description;
    eval(a16);
    return SharedArrayBuffer;
}
v12.map(f13);
gc();
