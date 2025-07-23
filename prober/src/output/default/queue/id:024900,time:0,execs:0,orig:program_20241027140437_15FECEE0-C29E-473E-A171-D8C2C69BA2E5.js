for (let i3 = 0, i4 = 10;
    i3 < i4;
    (() => {
        const v8 = i4--;
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const o22 = {
                set b(a17) {
                    for (let v18 = 0; v18 < 5; v18++) {
                        ("p" + v18).replace("1254848972", "");
                    }
                },
            };
            o22.b = o22;
        }
        new F9("1254848972", v8, F9, "1254848972");
    })()) {
}
gc();
