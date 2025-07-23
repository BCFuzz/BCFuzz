for (let i2 = 0, i3 = 10;
    (() => {
        i3--;
        class C5 {
            #toString(a7) {
            }
            constructor(a9) {
                try {
                    a9.#toString();
                } catch(e11) {
                }
                new Uint8ClampedArray();
            }
        }
        new C5(C5);
        return i2 < i3;
    })();
    ) {
}
gc();
