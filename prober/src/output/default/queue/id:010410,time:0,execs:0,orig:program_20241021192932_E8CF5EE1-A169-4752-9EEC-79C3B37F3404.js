for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        Boolean(a3);
    }
    new F1();
}
gc();
