for (let v1 = 0; v1 < 50; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        this.h = v1;
    }
    const v4 = new F2();
    const v5 = new F2();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        a9.h = a9;
        a9.h = a8;
    }
    const v10 = new F6(v5, v4);
    Object.defineProperty(v10, "h", { writable: true, value: Map });
    new F6(v5, v10);
}
gc();
