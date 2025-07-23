for (let v1 = 0; v1 < 5; v1++) {
    function F2(a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8) {
            return this;
        }
        f7.apply("values");
    }
    const v10 = new F2();
    const t9 = v10.constructor;
    new t9();
}
gc();
