const v0 = [0.06333842685810909,9.654102366361002];
for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        for (let v8 = 0; v8 < 10; v8++) {
            const v10 = "p" + v8;
            "p" in v0;
            v0[v10] = v8;
        }
        i4--;
        for (let v13 = 0; v13 < 5; v13++) {
            v0.d = v13;
            delete v0.d;
        }
    })()) {
}
gc();
