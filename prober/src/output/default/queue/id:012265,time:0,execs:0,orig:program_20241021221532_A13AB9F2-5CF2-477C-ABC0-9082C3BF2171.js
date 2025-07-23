for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = /6(a\1)/dis;
        for (let i = 0; i < 5; i++) {
            const o10 = {
                set b(a8) {
                    for (let v9 = 0; v9 < 5; v9++) {
                    }
                },
            };
            o10.b = o10;
        }
        v6.exec("getUint32");
    }
    const v13 = new F1(v0, F1, F1);
    new F1(v13, v13, v13);
}
gc();
