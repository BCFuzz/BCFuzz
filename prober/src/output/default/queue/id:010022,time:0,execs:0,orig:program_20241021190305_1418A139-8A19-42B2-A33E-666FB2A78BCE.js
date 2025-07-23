function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i9++, i8 < i9;
        (() => {
            i9--;
            const v17 = new Date();
            v17.g = this;
            for (let v18 = 0; v18 < 50; v18++) {
                v17.g *= v18;
                for (let v19 = 0; v19 < 5; v19++) {
                }
            }
            for (const v20 in Int8Array) {
                Int32Array(Uint32Array);
            }
        })()) {
        i9--;
    }
}
new F0();
gc();
