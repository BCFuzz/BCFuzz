function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6;
    try { v6 = a5.map(); } catch (e) {}
    const v8 = new BigInt64Array(a2);
    v8.copyWithin(0, v6);
}
new F0();
gc();
