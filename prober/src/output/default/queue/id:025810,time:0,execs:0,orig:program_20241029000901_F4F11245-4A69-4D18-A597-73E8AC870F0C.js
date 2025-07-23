for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        const v10 = new Uint32Array();
        Object.defineProperty(v10, "h", { writable: true, configurable: true, enumerable: true, value: 257 });
        function f11(a12, a13, a14, a15) {
            for (let v16 = 0; v16 < 500; v16++) {
                v10[9];
            }
            return a15;
        }
        f11();
    })()) {
}
gc();
