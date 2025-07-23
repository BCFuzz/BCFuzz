new Int16Array(1, 1, 77);
function f7(a8, a9, a10, a11) {
    a9 + a9;
    return 77;
}
f7();
f7(77, 77);
class C15 {
}
const v16 = new C15();
const v17 = v16.propertyIsEnumerable;
try { v17(v17, f7, C15, Uint8ClampedArray); } catch (e) {}
const v19 = new C15();
function f20() {
    return f20;
}
const v21 = [];
const v22 = `
    const v24 = Math?.sinh;
    try { new v24(v19); } catch (e) {}
    const v26 = f20 || v21;
    try { v26.toString(); } catch (e) {}
    const v28 = v21 - v26;
    v28 >>> v28;
    Math.imul();
`;
eval(v22);
gc();
