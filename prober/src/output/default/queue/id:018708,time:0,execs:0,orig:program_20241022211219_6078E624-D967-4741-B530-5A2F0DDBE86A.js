const v1 = new Set();
function f2(a3, a4) {
    return "matchAll";
}
v1[Symbol.toPrimitive] = f2;
for (let i11 = 0, i12 = 10 + 10; i12--, i12;) {
    const v19 = createGlobalObject();
    try { v19.load(v1); } catch (e) {}
}
gc();
