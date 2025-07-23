for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        F1 &= F1;
        eval(F1);
    }
    new F1();
}
gc();
