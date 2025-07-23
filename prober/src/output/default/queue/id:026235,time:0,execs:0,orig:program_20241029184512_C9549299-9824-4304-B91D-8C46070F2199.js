for (let i2 = 0, i3 = 257;
    (() => {
        i3--;
        class C5 {
            constructor(a7) {
                ++a7;
                try {
                    C5++;
                    Symbol.iterator;
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
