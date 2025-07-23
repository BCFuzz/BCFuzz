function f0() {
    const v2 = this.constructor;
    const v3 = v2.getOwnPropertySymbols(v2);
    function f5() {
        return f0;
    }
    const v6 = f5.apply(v3, arguments);
    let v7;
    try { v7 = v6(f5, v6, f0, v2); } catch (e) {}
    return v7;
}
f0();
gc();
