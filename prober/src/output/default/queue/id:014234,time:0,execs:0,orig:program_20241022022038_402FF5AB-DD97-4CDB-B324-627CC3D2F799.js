function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new BigInt64Array(128);
    v6.fill(a4);
}
new F2(5n);
gc();
