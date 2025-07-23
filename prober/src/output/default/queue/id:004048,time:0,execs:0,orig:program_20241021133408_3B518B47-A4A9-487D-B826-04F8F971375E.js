for (let v0 = 0; v0 < 32; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        this.c = v0;
        this.c = -256;
        this.h = -256;
    }
    new F1();
    new F1();
    new F1();
}
gc();
