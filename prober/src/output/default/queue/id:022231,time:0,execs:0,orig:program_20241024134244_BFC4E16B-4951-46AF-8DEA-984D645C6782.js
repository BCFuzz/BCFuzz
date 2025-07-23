for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v7 = new F5();
        const v9 = new Int32Array(v7);
        v9.values();
        const v13 = new Uint32Array(1003);
        for (const v14 in v13) {
            for (let v15 = 0; v15 < 5; v15++) {
                v9[v14] = v15;
            }
        }
    }
    new F1(F1, v0);
}
gc();
