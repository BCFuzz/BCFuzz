for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
const v15 = new SharedArrayBuffer(1000);
const v16 = new v12(v15);
v16[72] = v16;
v16[304] = v16;
v16.toSorted();
gc();
