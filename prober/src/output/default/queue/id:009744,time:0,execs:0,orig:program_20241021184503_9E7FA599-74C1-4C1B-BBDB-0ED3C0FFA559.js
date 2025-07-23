function f0() {
    function f1(a2, a3, a4, a5) {
        return f0;
    }
    return f1;
}
const v10 = Map.groupBy(Array(937), f0);
try { v10.has(); } catch (e) {}
gc();
