const t0 = createGlobalObject().Float16Array;
const v5 = new t0(8);
function f6() {
    return -3.0;
}
v5.toString = f6;
v5[2] = v5;
v5.toSorted();
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
