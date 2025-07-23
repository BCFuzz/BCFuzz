for (let v0 = 0; v0 < 125; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            return f3;
        }
        Object.defineProperty(this, "c", { configurable: true, set: f3 });
        const v5 = -Infinity;
        const v7 = new Date(v5);
        v7.setTime(v5);
    }
    new F1();
}
gc();
