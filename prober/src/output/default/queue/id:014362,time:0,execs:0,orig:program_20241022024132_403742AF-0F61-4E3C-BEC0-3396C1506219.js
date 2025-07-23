for (let v0 = 0; v0 < 10; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const t6 = a10.Float16Array;
                new t6(a11);
            }
            const v16 = new F8(this);
            return v16;
        }
        f7();
    }
    new F1();
}
gc();
