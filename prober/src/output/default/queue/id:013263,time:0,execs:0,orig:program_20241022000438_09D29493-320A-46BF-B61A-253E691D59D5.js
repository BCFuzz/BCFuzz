for (let v0 = 0; v0 < 50; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v3 = [this];
        v3.__proto__.concat(v3);
    }
    new F1();
}
gc();
