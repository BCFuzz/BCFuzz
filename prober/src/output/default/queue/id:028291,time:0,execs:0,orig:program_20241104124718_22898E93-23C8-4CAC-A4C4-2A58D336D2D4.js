const v1 = new Int16Array(Int16Array, Int16Array);
function f2() {
    const v4 = new Float32Array();
    return v4;
}
v1.constructor = f2;
const v5 = v1.constructor;
const v8 = createGlobalObject().Float16Array;
const v9 = v5();
const v11 = new v8(v9.buffer);
v11.set(v9);
for (let i15 = 0, i16 = 10; i15 < i16; i16--) {
}
for (let i25 = 0, i26 = 10; i25 < i26--;) {
}
for (let i35 = 0, i36 = 10; i35 < i36; i36--) {
}
gc();
