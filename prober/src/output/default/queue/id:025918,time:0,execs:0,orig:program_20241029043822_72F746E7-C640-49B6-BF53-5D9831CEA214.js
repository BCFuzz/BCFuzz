for (let i2 = 0, i3 = 257;
    (() => {
        i3--;
        class C5 {
            #toString(a7) {
            }
            constructor(a9) {
                ++a9;
                try {
                    this instanceof C5;
                    a9.#toString();
                    return arguments;
                } catch(e14) {
                }
            }
        }
        new C5(i2);
        return i2 < i3;
    })();
    ) {
}
gc();
