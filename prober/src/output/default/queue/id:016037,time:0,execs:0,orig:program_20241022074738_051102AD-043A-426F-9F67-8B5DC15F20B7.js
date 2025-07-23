function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
        }
        const v14 = new BigUint64Array();
        function* f15(a16, a17) {
            yield* v14;
            return BigUint64Array;
        }
        BigUint64Array[Symbol.iterator] = f15;
        new BigUint64Array(BigUint64Array);
        /\u{12345}/myvis;
        for (let i24 = 0, i25 = 10; i25--, i24 < i25;) {
        }
    `;
    eval(v2);
}
new F0();
gc();
