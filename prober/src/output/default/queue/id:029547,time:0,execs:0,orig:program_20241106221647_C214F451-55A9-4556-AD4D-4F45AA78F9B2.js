function f0(a1, a2, a3, a4) {
    function f5() {
        [f5()];
        function f9() {
            return a4;
        }
        return f9.apply(a1, arguments);
    }
    f5.apply(a3);
    return a2;
}
try { f0(); } catch (e) {}
gc();
