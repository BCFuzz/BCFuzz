function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        class C5 {
            constructor(a7, a8, a9, a10) {
                for (let v11 = 0; v11 < 25; v11++) {
                    const v13 = "p" + v11;
                    v13.bold();
                    this[v13] = v11;
                    for (let v15 = 0; v15 < 500; v15++) {
                    }
                }
            }
        }
        const v16 = new C5();
        v16.p11 = v16;
    }
}
new F0();
gc();
