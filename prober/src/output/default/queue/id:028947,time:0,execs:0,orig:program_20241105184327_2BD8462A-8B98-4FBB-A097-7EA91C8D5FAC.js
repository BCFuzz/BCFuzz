const v2 = new Uint32Array(106);
function f3(a4) {
    return v2;
}
const v6 = new Int16Array(v2, 106, 106);
v6.constructor = f3;
const v7 = v6.constructor;
const v10 = createGlobalObject().Float16Array;
const v11 = v7(f3);
const v13 = new v10(v11.buffer);
v13[164] = v13;
v13.set(v11);
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
for (let i27 = 0, i28 = 10; i28--, i27 < i28;) {
}
for (let i37 = 0, i38 = 10; i38--, i37 < i38;) {
}
for (let i47 = 0, i48 = 10; i47 < i48; i48--) {
}
gc();
