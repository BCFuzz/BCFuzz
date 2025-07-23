for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = [4096,268435456];
v10.pop();
const o14 = {
    "maxByteLength": 12,
};
const v16 = new ArrayBuffer(5, o14);
const v18 = new Int32Array(v16);
v18.set(v10);
gc();
