function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    function f5(a6) {
        try { new a6(); } catch (e) {}
        try { a6.join(); } catch (e) {}
        return f5;
    }
    class C9 extends f5 {
    }
    new f5(C9);
    for (let v11 = 0; v11 < 100; v11++) {
    }
    return f2;
}
F0.valueOf = f2;
F0 *= F0;
gc();
