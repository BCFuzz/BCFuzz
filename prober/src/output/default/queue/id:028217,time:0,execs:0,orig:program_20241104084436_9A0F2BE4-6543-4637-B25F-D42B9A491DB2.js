const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
function f2() {
    const v5 = new Float32Array(3008);
    v5[2408] = v5;
    return v5;
}
v1.constructor = f2;
const v6 = v1.constructor;
const v9 = createGlobalObject().Float16Array;
const v10 = v6();
const v12 = new v9(v10.buffer);
v12.set(v10);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
for (let i26 = 0, i27 = 10; i27--, i26 < i27;) {
}
for (let i36 = 0, i37 = 10; i36 < i37; i37--) {
}
for (let i46 = 0, i47 = 10; i46 !== i47; i47--) {
}
gc();
