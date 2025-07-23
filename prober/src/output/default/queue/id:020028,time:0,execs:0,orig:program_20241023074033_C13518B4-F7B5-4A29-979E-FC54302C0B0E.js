for (let v0 = 0; v0 < 5; v0++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        -a4;
        a5.toString = Symbol;
    }
    const v9 = new F2(196.25100004624983, F2);
    const v10 = v9.constructor;
    try { new v10(v10); } catch (e) {}
}
gc();
