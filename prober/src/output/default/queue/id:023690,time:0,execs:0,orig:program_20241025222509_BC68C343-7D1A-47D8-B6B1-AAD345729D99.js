const v3 = new Int8Array(1000);
const t1 = createGlobalObject().Float16Array;
const v7 = new t1(v3);
v7[2] = v7;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
function f18(a19) {
    return -31852;
}
v7.valueOf = f18;
v7[0] = v7;
v7.toSorted();
gc();
