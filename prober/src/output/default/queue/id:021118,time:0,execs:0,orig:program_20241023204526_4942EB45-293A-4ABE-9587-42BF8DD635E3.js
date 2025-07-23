const v2 = createGlobalObject().Float16Array;
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        const v10 = i6--;
        function f11() {
            f11 >>>= f11;
            return v10;
        }
        const v12 = f11(v10, f11, i5);
        const v13 = new v2();
        v13.constructor = f11;
        try { v13.slice(v13, i5, v12); } catch (e) {}
    })()) {
}
gc();
