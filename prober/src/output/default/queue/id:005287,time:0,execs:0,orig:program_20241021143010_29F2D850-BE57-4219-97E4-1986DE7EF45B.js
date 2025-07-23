function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.__lookupGetter__;
    try { v5(v5, a4, v5, this, v5); } catch (e) {}
    for (let v7 = 0; v7 < 10; v7++) {
        const v8 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
        try { v8.find(); } catch (e) {}
        for (let v10 = 0; v10 < 100; v10++) {
        }
        const t9 = "symbol";
        t9.__proto__ = v8;
    }
}
new F1();
new F1(F1, "symbol");
gc();
