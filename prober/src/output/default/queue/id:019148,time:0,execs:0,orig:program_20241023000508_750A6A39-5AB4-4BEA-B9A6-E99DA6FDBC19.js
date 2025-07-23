function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        for (let v5 = 0; v5 < 100; v5++) {
        }
        class C6 {
            constructor(a8, a9, a10, a11) {
                for (let v12 = 0; v12 < 25; v12++) {
                    this["p" + v12] = v12;
                    for (let v15 = 0; v15 < 500; v15++) {
                    }
                }
            }
        }
        const v16 = new C6();
        v16.c = v16;
    }
}
new F0(F0, F0);
gc();
