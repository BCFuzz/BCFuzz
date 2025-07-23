for (let v0 = 0; v0 < 100; v0++) {
    const o13 = {
        toString(a2, a3) {
            const o11 = {
                p(a5, a6) {
                    class C7 {
                        static set e(a9) {
                        }
                    }
                    for (let v10 = 0; v10 < 5; v10++) {
                        C7.e = v10;
                    }
                    return a5;
                },
            };
            o11.p(v0, a3, a2, o11);
            return a2;
        },
    };
    o13.toString(o13);
}
gc();
