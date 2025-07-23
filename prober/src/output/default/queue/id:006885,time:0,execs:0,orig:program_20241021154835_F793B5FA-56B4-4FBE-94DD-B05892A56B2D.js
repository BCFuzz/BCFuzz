for (let v0 = 0; v0 < 10; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v3 = -Infinity;
        const v5 = new Date();
        v5.setTime(v3);
    }
    new F1();
}
gc();
