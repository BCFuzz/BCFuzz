function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    Array.toJSON = Array;
    const v5 = Array(a2);
    v5[640] = Array;
    const o10 = {
        toString(a7) {
            JSON.stringify(v5);
            return this;
        },
    };
    o10.toString(F0, a3, a2);
}
new F0(F0, F0);
gc();
