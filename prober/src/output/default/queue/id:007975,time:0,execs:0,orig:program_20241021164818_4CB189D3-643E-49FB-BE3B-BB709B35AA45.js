for (let v0 = 0; v0 < 100; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = new Date();
        v5.setTime(0.3117380373181061);
    }
    new F1();
}
gc();
