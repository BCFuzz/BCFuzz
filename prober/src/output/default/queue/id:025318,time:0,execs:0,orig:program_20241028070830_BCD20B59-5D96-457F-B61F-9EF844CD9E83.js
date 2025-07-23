for (let v0 = 0; v0 < 25; v0++) {
    const v1 = /\cj\cJ\ci\cI\ck\cK/dgis;
    const v4 = new BigUint64Array(4066);
    for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    }
    const o24 = {
        n(a16, a17, a18) {
            const v19 = v1.ignoreCase;
            createGlobalObject().Atomics.or(v4, v19, v19);
            return a16;
        },
    };
    const t12 = o24.n;
    t12();
}
gc();
