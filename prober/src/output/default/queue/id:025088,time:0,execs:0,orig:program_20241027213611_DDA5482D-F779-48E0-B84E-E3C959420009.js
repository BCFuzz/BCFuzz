const v0 = /\cj\cJ\ci\cI\ck\cK/dgis;
const v3 = new BigUint64Array(4066);
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
const o23 = {
    n(a15, a16, a17) {
        const v18 = v0.ignoreCase;
        createGlobalObject().Atomics.or(v3, v18, v18);
        return a15;
    },
};
const t11 = o23.n;
t11();
gc();
