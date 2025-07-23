for (let v1 = 0; v1 < 50; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = "padEnd";
    }
    const v4 = new F2();
    const v5 = new F2();
    v5.h;
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        a10.h = a9;
        a10.h = a10;
    }
    const v11 = new F7(v5, v4);
    new F7(v5, v11);
}
gc();
