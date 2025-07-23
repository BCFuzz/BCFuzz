function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
const v7 = new FinalizationRegistry(FinalizationRegistry);
const v9 = Date();
const o10 = {
};
for (const v11 in v9) {
    v7.register(o10, v5, o10);
}
gc();
