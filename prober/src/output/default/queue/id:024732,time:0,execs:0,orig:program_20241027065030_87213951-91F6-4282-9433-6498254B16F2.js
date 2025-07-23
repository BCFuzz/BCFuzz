function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i = 0; i < 10; i++) {
    const o11 = {
        set b(a3) {
            function f4(a5, a6) {
                const v7 = new F0();
                const o8 = {
                };
                for (let i = 0; i < 5; i++) {
                    for (let v9 = 0; v9 < 50; v9++) {
                    }
                    v7.b = o8;
                }
                return v7;
            }
            a3.valueOf = f4;
            this ^ a3;
        },
    };
    o11.b = o11;
}
gc();
