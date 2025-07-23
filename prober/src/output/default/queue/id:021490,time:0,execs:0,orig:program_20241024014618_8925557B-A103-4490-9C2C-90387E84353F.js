for (let i3 = 0, i4 = 10; i3 !== i4; i4--) {
}
const v13 = createGlobalObject().Float16Array;
const v16 = new SharedArrayBuffer(1000);
const v17 = new v13(v16);
function f18() {
    return -1539977330;
}
v17.toString = f18;
v17[72] = v17;
v17.toSorted();
gc();
