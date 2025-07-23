function f0() {
    const v4 = new Uint8Array(1024);
    f = Symbol;
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        this.d = v4;
    }
    const v11 = new F5();
    const v12 = new F5(1024, Symbol, Uint8Array, v11);
    for (const v14 of v11.d) {
        v12.b;
    }
    eval();
    return f0;
}
f0();
gc();
