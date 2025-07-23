for (let i2 = 0, i3 = 257;
    (() => {
        i3--;
        class C5 {
            #toString(a7) {
            }
            constructor(a9) {
                ++a9;
                try {
                    a9.#toString();
                    return arguments;
                } catch(e13) {
                }
            }
        }
        new C5(257);
        return i2 < i3;
    })();
    ) {
}
gc();
