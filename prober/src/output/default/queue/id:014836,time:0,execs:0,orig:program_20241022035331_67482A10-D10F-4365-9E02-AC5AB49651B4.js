const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(4096, o2);
const v6 = new Int8Array(v4);
for (let i8 = 0, i9 = 4096;
    (() => {
        i9--;
        try { v6.forEach(i8); } catch (e) {}
        return i8 < i9;
    })();
    ) {
}
for (let i19 = 0, i20 = 10; i19 != i20; i20--) {
}
for (let i29 = 0, i30 = 10; i29 !== i30; i30--) {
}
gc();
