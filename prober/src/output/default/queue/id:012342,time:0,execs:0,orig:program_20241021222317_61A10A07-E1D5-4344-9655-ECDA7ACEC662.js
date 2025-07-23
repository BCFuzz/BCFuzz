for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const v6 = new Int32Array();
        function f7() {
            function f8() {
                return f8;
            }
            return f8;
        }
        function f9(a10) {
            return a10;
        }
        Object.defineProperty(v6, "constructor", { get: f7, set: f9 });
        function f11(a12, a13, a14, a15) {
            return Int32Array;
        }
        v6.map(f11);
        return v4;
    })();
    i3--) {
}
gc();
