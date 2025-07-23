const v1 = new Uint8Array();
v1.buffer.transfer();
for (let i7 = 0, i8 = 10;
    (() => {
        const v9 = i7 < i8;
        const v11 = createGlobalObject().Float16Array;
        try { new v11(v1); } catch (e) {}
        return v9;
    })();
    (() => {
        i8--;
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
    })()) {
}
gc();
