for (let i = 0; i < 5; i++) {
    const o11 = {
        toString(a1, a2) {
            function F3(a5, a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                a6[25] = a7;
                for (let i = 0; i < 5; i++) {
                    a6[25] &= 102;
                    for (let v9 = 0; v9 < 250; v9++) {
                    }
                }
            }
            new F3(F3, a1);
            return this;
        },
    };
    o11[25] = o11;
    o11.toString(o11);
}
gc();
