for (let v1 = 0; v1 < 5; v1++) {
    function f2(a3, a4, a5) {
        Math.sin(a4);
        return a5;
    }
    try { f2(v1, -9007199254740990n); } catch (e) {}
    f2();
}
gc();
