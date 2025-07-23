function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.__lookupGetter__;
    let v5;
    try { v5 = v4(); } catch (e) {}
    for (let v6 = 0; v6 < 10; v6++) {
        const v7 = [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
        try { v7.find(a3, v7); } catch (e) {}
        for (let v9 = 0; v9 < 250; v9++) {
        }
        function* f10(a11, a12, a13) {
            return v6;
        }
        f10(f10, v5);
    }
}
new F0();
gc();
