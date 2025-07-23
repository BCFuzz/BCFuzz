for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        const v8 = i4--;
        const v10 = new Float64Array(v8, 257, i4);
        Object.defineProperty(v10, "h", { writable: true, configurable: true, enumerable: true, value: 257 });
        function f11(a12, a13, a14, a15) {
            for (let v16 = 0; v16 < 500; v16++) {
                v10[9];
            }
            return a15;
        }
        f11(v8, 257, i4, v10);
    })()) {
}
gc();
