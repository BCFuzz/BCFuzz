function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F5();
    const v10 = new F5(F0, F5);
    (v9 ** v10) & 1.7976931348623157e+308;
    for (let v14 = 0; v14 < 250; v14++) {
    }
}
new F0(F0, F0, F0);
gc();
