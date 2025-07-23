for (let i = 0; i < 5; i++) {
    const o18 = {
        toString(a1, a2) {
            function F3(a5, a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i = 0; i < 5; i++) {
                    4096 in this;
                }
            }
            new F3();
            for (let i12 = 0; i12 < 21768; i12++) {
            }
            return a2;
        },
    };
    o18.toString(o18, o18, o18, o18);
}
gc();
