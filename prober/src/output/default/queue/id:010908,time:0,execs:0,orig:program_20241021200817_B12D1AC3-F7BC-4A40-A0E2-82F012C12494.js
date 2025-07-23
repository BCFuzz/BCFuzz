async function* f0(a1, a2) {
    function f3() {
        const v5 = new Uint16Array(a2, a1, a2);
        const v6 = v5.set;
        try { v6(); } catch (e) {}
        return a2;
    }
    a1.then = f3;
    return a1;
}
f0(f0).next();
gc();
