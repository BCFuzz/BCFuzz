for (let v1 = 0; v1 < 50; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    v4.b = v4;
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        a7.b;
        a7.b = a7;
    }
    const v10 = new F5(v4);
    const t12 = v10.constructor;
    new t12("padEnd");
}
gc();
