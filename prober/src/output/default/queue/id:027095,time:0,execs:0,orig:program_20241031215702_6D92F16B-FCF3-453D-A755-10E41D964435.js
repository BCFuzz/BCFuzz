const v0 = /\cj\cJ\ci\cI\ck\cK/dgis;
const v3 = new BigUint64Array(4066);
v3.subarray(4066, 4066);
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
}
const o24 = {
    n(a16, a17, a18) {
        const v19 = v0.ignoreCase;
        const v22 = createGlobalObject().Atomics;
        v22.or(v3, v19, v19);
        return v22;
    },
};
const t13 = o24.n;
t13();
gc();
