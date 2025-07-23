const v3 = createGlobalObject().Float16Array;
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
}
const v14 = new v3();
const v16 = Uint8ClampedArray.from(v14);
try { v16.with(-2.220446049250313e-16); } catch (e) {}
gc();
