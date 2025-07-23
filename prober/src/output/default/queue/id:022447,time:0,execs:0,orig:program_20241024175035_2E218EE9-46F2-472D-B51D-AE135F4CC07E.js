function f0() {
    const v1 = /[]kZa(?!bbb|bb)c/mdyv;
    const o2 = {
    };
    const v4 = new Proxy(v1, o2);
    v4.lastIndex = v4;
    function f5() {
        return f0;
    }
    const v6 = f5.apply(v1, v4);
    try { v6(); } catch (e) {}
    return f0;
}
f0();
gc();
