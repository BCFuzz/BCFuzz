const t0 = createGlobalObject().Float16Array;
const v4 = new t0(8);
v4[1] = v4;
v4.toSorted();
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
gc();
