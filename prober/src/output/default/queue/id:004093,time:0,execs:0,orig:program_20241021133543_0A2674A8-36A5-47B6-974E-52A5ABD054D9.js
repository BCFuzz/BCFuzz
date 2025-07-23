with ([]) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { F1.call(); } catch (e) {}
}
gc();
