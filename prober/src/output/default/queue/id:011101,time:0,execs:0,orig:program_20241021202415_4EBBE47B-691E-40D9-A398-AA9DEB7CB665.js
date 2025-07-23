function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
for (let i = 0; i < 5; i++) {
    const v8 = (v3 - -1024) & F1;
    Math.log10(v8);
    v8 & 1;
}
const v12 = new BigUint64Array(4092);
for (const v13 of v12) {
}
gc();
