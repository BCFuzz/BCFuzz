const v1 = new Uint32Array();
const t1 = createGlobalObject().Float16Array;
const v6 = new t1(606);
for (let i9 = -3, i10 = 10;
    i9 < i10;
    (() => {
        i10--;
        try { v1.set(v6); } catch (e) {}
    })()) {
}
gc();
