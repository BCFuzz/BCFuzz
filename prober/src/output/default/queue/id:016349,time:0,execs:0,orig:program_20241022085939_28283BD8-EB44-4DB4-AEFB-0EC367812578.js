for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = /Aa*b/dvg;
const o13 = {
    "maxByteLength": 1000,
};
const v15 = new SharedArrayBuffer(1000, o13);
const v17 = new Int16Array(v15);
delete v17[v10];
gc();
