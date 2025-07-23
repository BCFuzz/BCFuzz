function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 25; v2++) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            F3 &= F3;
            eval();
        }
        new F3();
    }
}
new F0();
gc();
