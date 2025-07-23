for (let v0 = 0; v0 < 25; v0++) {
    for (let i3 = -3, i4 = 10;
        i3 < i4;
        (() => {
            const v10 = new Int32Array(v0);
            function f11(a12, a13, a14, a15) {
                a14.byteLength;
            }
            f11(Int32Array, 5n, Int32Array);
            v10.map(f11);
            i4--;
        })()) {
    }
}
gc();
