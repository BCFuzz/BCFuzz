for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a7;
        this.c = v3;
        [536870912];
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
    }
    new F4();
    const v20 = new F4();
    new F4(v20, v0);
}
gc();
