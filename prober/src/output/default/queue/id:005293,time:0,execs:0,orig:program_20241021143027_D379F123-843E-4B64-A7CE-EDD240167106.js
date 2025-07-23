function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.__lookupGetter__;
    try { new v4(); } catch (e) {}
    for (let v6 = 0; v6 < 10; v6++) {
        const v7 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
        let v8;
        try { v8 = v7.find(); } catch (e) {}
        for (let v9 = 0; v9 < 250; v9++) {
        }
        const v11 = new Float64Array();
        const t11 = v11.constructor;
        new t11(v7, v7, v8);
    }
}
new F0();
gc();
