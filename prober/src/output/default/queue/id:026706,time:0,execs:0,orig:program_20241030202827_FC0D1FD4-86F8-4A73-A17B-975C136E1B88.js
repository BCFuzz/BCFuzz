for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = createGlobalObject().Float16Array;
const o15 = {
    "maxByteLength": 5,
};
const v17 = new SharedArrayBuffer(5, o15);
const v18 = new v12(v17);
v18.sort();
for (let i22 = 0, i23 = 10; i22 !== i23; i23--) {
}
gc();
