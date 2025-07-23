for (let i = 0; i < 25; i++) {
    for (let i2 = 0, i3 = 10;
        (() => {
            function f4() {
                const o5 = {
                };
                o5.constructor = f4;
                return o5;
            }
            const v6 = f4();
            f4();
            const t8 = v6.constructor;
            t8();
            return i2 < i3;
        })();
        i3--) {
    }
}
gc();
