class C1 {
    #e = 1518568775;
}
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        i5--;
        class C10 extends C1 {
            constructor(a12, a13) {
                for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
                }
                super();
                const v26 = Date();
                const o27 = {
                    [Math]: v26,
                    [a12]: this,
                };
                JSON.stringify(o27);
            }
        }
        new C10();
    })()) {
}
gc();
