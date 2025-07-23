const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
const v2 = v1.constructor;
const v5 = createGlobalObject().Float16Array;
const v6 = new v2();
const v8 = new v5(v6.buffer);
v8.set(v6);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
}
for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
}
gc();
