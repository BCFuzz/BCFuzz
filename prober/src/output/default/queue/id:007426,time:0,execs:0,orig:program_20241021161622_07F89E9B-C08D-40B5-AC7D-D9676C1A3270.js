function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 125; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            eval();
        }
        new F5();
    }
}
new F0();
gc();
