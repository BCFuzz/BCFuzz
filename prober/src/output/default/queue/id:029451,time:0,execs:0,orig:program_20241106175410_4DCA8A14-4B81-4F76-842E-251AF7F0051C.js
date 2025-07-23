for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = Array();
        for (let [i29, i30] = (() => {
                const v11 = new Int8Array(4096);
                const v14 = Date();
                const o15 = {
                    [Math]: v14,
                    [v11]: v7,
                };
                o15.toJSON = this;
                JSON.stringify(o15);
                for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
                }
                return [0, 10];
            })();
            i30--, i29 < i30;
            ) {
        }
    }
    const v37 = new F1();
    v37.constructor;
}
gc();
