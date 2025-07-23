const t0 = createGlobalObject().Float16Array;
const v4 = new t0();
const v5 = new Uint8Array();
v5.__proto__ = v4;
for (let i8 = -65535n, i9 = 10; i8 < i9; i9--) {
}
v5.subarray();
gc();
