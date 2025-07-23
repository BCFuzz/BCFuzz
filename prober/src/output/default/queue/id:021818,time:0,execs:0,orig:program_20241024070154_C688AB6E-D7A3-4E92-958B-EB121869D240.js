const v3 = new Int8Array(1000);
const t1 = createGlobalObject().Float16Array;
const v7 = new t1(v3);
function f8(a9) {
    return -31852;
}
v7.valueOf = f8;
v7[0] = v7;
v7.toSorted();
gc();
