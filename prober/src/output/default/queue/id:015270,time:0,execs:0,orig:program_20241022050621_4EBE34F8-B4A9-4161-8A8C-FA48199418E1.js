const v1 = createGlobalObject();
const t1 = v1.Float16Array;
const v5 = new t1(8);
function f6() {
    const v7 = new Int8Array(8);
    const v9 = new Uint16Array(v1, 8, 8);
    return v9 & v7;
}
v5.sort(f6);
gc();
