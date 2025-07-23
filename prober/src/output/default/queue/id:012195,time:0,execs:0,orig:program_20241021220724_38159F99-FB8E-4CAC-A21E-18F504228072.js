for (let v2 = 0; v2 < 50; v2++) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = "padEnd";
    }
    const v5 = new F3();
    const v6 = new F3();
    v6.h;
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        a11.h = 4096;
        a11.h = a10;
        a11.h = a11;
    }
    const v12 = new F8(v6, v5);
    new F8(v6, v12);
}
gc();
