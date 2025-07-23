function f0(a1) {
    const o10 = {
        n(a3, a4) {
            for (let i = 0; i < 5; i++) {
                for (let v5 = 0; v5 < 250; v5++) {
                    v5++;
                    v5--;
                }
                this[Symbol.toPrimitive] = a1;
            }
            return a3;
        },
    };
    o10.n();
    return f0;
}
f0();
f0(f0);
gc();
