function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
for (let i = 0; i < 5; i++) {
    const v7 = (v2 - -1024) & F0;
    Math.log10(v7);
    v7 & 1;
    Math.log(v7);
}
const v13 = new BigUint64Array(586);
for (const v14 of v13) {
}
gc();
