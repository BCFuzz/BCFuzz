const t0 = createGlobalObject().Float16Array;
const v4 = new t0(BigInt64Array);
const v7 = new Int8Array(v4.buffer);
v7[5] = v7;
v7.set(v4);
for (let i11 = 0, i12 = 10; i12; i12--) {
}
gc();
