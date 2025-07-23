const o0 = {
};
for (let i3 = -3, i4 = 10;
    i3 < i4;
    (() => {
        const v9 = new Float32Array();
        for (let i12 = 0, i13 = 10;
            i12 < i13;
            (() => {
                for (let v17 = 0; v17 < 25; v17++) {
                    const v19 = o0 + v17;
                    "p" in v9;
                    v9[v19] = v17;
                }
                i13--;
            })()) {
        }
        i4--;
    })()) {
}
gc();
