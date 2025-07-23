for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        for (let i = 0; i < 5; i++) {
            const o14 = {
                set b(a12) {
                    "" + a12;
                },
            };
            const v15 = o14.__defineSetter__;
            try { new v15(7, undefined); } catch (e) {}
            o14.b = o14;
        }
    })()) {
}
gc();
