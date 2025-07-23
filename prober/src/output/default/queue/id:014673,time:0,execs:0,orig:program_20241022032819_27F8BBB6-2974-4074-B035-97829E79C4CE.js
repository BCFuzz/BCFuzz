class C0 {
}
const v1 = new C0();
function f2(a3) {
    const v5 = createGlobalObject();
    const t5 = v5.Float16Array;
    const v7 = new t5(v5, v5);
    v7[Symbol.toPrimitive] = createGlobalObject;
    v7[2] = v7;
    return f2;
}
v1.constructor = f2;
const v10 = v1.constructor;
try { v10(); } catch (e) {}
gc();
