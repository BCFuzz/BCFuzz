for (let v1 = 0; v1 < 50; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = "padEnd";
    }
    const v4 = new F2();
    const v5 = new F2();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        a9.h = a8;
        a9.h = a9;
    }
    const v10 = new F6(v5, v4);
    new F6(v5, v10);
}
gc();
