for (let i2 = -3, i3 = 10;
    i2 < i3;
    (() => {
        const v8 = new Float32Array();
        for (let i11 = 0, i12 = 10;
            i11 < i12;
            (() => {
                for (let v16 = 0; v16 < 25; v16++) {
                    const v18 = "p" + v16;
                    "p" in v8;
                    v8[v18] = v16;
                }
                i12--;
            })()) {
        }
        i3--;
    })()) {
}
gc();
