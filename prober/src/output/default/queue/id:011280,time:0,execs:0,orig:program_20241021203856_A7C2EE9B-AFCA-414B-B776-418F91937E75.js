const v0 = [16,5,8,-1445634573,10000];
for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        i4--;
        class C10 {
            16 = v0;
        }
        const v11 = new C10();
        const v12 = new C10();
        function f13(a14, a15, a16, a17) {
            const o29 = {
                [a16](a19, a20, a21) {
                },
                10: a14,
                toString(a23, a24, a25) {
                    JSON["stringify"](this);
                },
            };
            return o29;
        }
        f13(v11, 1000000.0, f13(v12));
    })()) {
}
gc();
