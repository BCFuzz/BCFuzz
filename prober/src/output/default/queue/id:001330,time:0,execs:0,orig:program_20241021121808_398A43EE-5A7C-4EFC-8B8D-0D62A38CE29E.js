for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    const v4 = new F1();
    v4.constructor.toString().match(v3);
}
gc();
