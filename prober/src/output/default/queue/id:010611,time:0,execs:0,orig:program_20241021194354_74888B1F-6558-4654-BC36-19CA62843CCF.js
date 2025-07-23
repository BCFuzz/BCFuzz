for (let v0 = 0; v0 < 10; v0++) {
    const o10 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                    v5++;
                    v5--;
                }
                this[Symbol.toPrimitive] = undefined;
            }
            return a4;
        },
    };
    o10.n();
}
gc();
