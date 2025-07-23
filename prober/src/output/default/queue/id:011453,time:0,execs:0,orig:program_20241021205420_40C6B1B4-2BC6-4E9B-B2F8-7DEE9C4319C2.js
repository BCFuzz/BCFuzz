for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    gc();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F6(v3, v0);
    for (let i = 0; i < 5; i++) {
        v10[-2];
        v3.__proto__;
    }
}
gc();
