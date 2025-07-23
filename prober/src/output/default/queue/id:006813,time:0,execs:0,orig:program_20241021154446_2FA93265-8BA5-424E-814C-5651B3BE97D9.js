for (let v2 = 0; v2 < 5; v2++) {
    function f3(a4, a5) {
        a5.bind(a4);
        return -26850;
    }
    try { f3(true, -26850); } catch (e) {}
    f3(v2, f3);
}
gc();
