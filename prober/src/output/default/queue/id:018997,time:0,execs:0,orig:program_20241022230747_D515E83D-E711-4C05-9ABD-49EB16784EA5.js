for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v6 = F1.toString;
        try { v6(); } catch (e) {}
    }
    function f8(a9) {
        typeof v0 === "function";
        return a9;
    }
    F1.toString = f8;
    new F1();
}
gc();
