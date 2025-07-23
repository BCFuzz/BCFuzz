for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        for (let [i16, i17] = (() => {
                const o13 = {
                    ["eC"](a10, a11) {
                        "object" in a11;
                    },
                };
                try { o13.eC(); } catch (e) {}
                return [0, 10];
            })();
            i16 < i17;
            i17--) {
        }
    }
    new F1(v0, v0, F1);
}
gc();
