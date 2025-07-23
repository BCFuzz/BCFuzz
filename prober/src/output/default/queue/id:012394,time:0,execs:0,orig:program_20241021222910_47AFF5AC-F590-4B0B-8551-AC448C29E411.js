for (let v1 = 0; v1 < 10; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        v1.toString(8) !== 65535;
    }
    new F2();
}
gc();
