const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
const v4 = v3.buffer;
v4.transferToFixedLength(v4, v4, createGlobalObject);
delete v3[15];
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
gc();
