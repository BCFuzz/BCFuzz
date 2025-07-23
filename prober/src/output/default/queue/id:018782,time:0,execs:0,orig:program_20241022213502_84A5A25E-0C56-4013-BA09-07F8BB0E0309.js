const v1 = new Int16Array();
const v2 = v1.reverse();
const t1 = createGlobalObject().Float16Array;
const v7 = new t1(606);
for (let i10 = -3, i11 = 10;
    i10 < i11;
    (() => {
        i11--;
        try { v2.set(v7); } catch (e) {}
    })()) {
}
gc();
