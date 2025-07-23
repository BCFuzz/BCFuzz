for (let v1 = 0; v1 < 100; v1++) {
    function f2(a3, a4, a5) {
        function f6(a7, a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F9(F9, a7, f6);
            function f16(a17, a18, a19) {
                const o20 = {
                    [v1]: a5,
                };
                return f6;
            }
            f16("h", a3, a4);
            return "h";
        }
        return v1;
    }
    f2(v1, v1, "h");
}
gc();
