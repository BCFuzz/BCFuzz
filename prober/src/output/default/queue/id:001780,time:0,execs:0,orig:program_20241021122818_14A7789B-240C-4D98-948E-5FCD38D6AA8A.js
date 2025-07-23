/zR/dv;
for (let v1 = 0; v1 < 10; v1++) {
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = new F2();
    const v5 = new F2();
    v5.constructor.toString().match(v4);
}
gc();
