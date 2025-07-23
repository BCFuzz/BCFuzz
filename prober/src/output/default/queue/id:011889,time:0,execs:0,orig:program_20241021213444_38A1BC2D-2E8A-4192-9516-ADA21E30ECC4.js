function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        class C17 {
        }
        const v18 = new C17();
        const v19 = v18.constructor;
        const v21 = new BigInt64Array(this, i9, a5);
        v21.subarray(v19, -1.7976931348623157e+308);
    }
}
new F1(F1, F1, -1.7976931348623157e+308, -1.7976931348623157e+308);
gc();
