const v1 = new Int16Array();
function f2(a3) {
    const v6 = new Float64Array(198);
    return v6;
}
v1.constructor = f2;
const v7 = v1.constructor;
const v10 = createGlobalObject().Float16Array;
const v11 = v7(v10, v10, f2);
const v13 = new v10(v11.buffer);
v13.set(v11);
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
for (let i27 = 0, i28 = 10; i28--, i27 < i28;) {
}
for (let i37 = 0, i38 = 10; i37 < i38; i38--) {
}
gc();
