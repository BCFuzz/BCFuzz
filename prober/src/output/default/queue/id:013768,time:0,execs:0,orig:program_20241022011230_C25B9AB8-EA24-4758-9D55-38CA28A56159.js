for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F5(F5, F5);
    v9.b = v9;
    this.constructor.defineProperties(F1, v9);
    gc();
}
gc();
