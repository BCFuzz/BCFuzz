for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        (4294967296).toString(8).padEnd();
    }
    new F1();
}
gc();
