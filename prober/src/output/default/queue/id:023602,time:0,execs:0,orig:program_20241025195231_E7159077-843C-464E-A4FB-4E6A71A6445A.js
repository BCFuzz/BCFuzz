function f0() {
    const v2 = this instanceof f0;
    const v3 = this.constructor;
    const v4 = v3.getOwnPropertySymbols(v3);
    function f6() {
        return f0;
    }
    const v7 = f6.apply(v4, arguments);
    try { v7(); } catch (e) {}
    return v2;
}
f0();
gc();
