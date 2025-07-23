const v1 = new Float32Array();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let i14 = 0, i15 = 10;
    i14 < i15;
    (() => {
        for (let v19 = 0; v19 < 25; v19++) {
            const v21 = "p" + v19;
            "p" in v1;
            v1[v21] = v19;
        }
        i15--;
    })()) {
}
gc();
