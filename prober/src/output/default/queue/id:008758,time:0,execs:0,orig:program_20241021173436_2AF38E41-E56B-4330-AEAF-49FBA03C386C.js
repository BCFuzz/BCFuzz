function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    for (let v4 = 0; v4 < 25; v4++) {
        for (let v6 = 0; v6 < 250; v6++) {
            v6++;
            v6--;
        }
        ("pOs")["replace"](/([\xe2\x81\xa3])/vis);
        v3["p" + v4] = v4;
    }
    return f0;
}
f0();
gc();
