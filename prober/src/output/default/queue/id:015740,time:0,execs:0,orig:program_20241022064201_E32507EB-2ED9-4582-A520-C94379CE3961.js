const v1 = new Set();
for (let v2 = 0; v2 < 5; v2++) {
    function f3(a4, a5, a6) {
        a4.keys();
        return v2;
    }
    try { f3(v2); } catch (e) {}
    f3(v1);
}
gc();
