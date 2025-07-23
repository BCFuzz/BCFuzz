const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
function f2() {
    const v5 = new Float32Array(3008);
    function f6() {
        return 3008;
    }
    v5.valueOf = f6;
    v5[2408] = v5;
    return v5;
}
v1.constructor = f2;
const v7 = v1.constructor;
const v10 = createGlobalObject().Float16Array;
const v11 = v7(v10, createGlobalObject, v7);
const v13 = new v10(v11.buffer);
v13.set(v11);
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
for (let i37 = 0, i38 = 10; i37 !== i38; i38--) {
}
gc();
