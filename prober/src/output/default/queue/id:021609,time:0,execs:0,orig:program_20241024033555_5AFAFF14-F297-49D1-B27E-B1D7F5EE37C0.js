class C1 {
    constructor(a3, a4) {
        for (let v5 = 0; v5 < 100; v5++) {
            function F6(a8, a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                const v13 = new Int32Array(a11, a9, v5);
                const v14 = v13.sort();
                for (let i18 = 0, i19 = 10;
                    i19--, (i18 ** i18) - v14, i18 < i19;
                    (() => {
                        new Int32Array();
                        i18++;
                    })()) {
                    if (a3 === i18) {
                    } else {
                    }
                    i18 /= 8;
                }
            }
            new F6(a4, v5, 1000000.0, F6);
        }
    }
}
new C1(1000000.0);
for (let i35 = 0, i36 = 10; i36--, i35 < i36;) {
}
gc();
