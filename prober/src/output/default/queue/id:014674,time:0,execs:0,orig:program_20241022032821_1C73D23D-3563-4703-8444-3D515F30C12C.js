const o15 = {
    get d() {
        for (let v1 = 0; v1 < 10; v1++) {
            for (let i4 = 0, i5 = 10;
                (() => {
                    i5--;
                    const o8 = {
                        get c() {
                            return this;
                        },
                    };
                    for (let i = 0; i < 5; i++) {
                        o8.c;
                    }
                    return i4 < i5;
                })();
                ) {
            }
        }
        return this;
    },
};
const o16 = {
    ...o15,
};
gc();
