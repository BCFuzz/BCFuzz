function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v5 = 0;
    for (let i = 0; i < 10; i++) {
        let v6;
        try { v6 = a3.toString(v5); } catch (e) {}
        v6 <<= this;
        v5++;
    }
}
new F1(2.2250738585072014e-308);
gc();
