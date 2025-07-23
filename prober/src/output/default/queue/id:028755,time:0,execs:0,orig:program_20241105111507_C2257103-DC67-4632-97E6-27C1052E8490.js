const o26 = {
    n(a1, a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v18 = 0; v18 < 5; v18++) {
                function f20(a21, a22) {
                    return "NEGATIVE_INFINITY";
                }
                for (const v23 in "NEGATIVE_INFINITY") {
                    Object.defineProperty(arguments, v23, { get: f20 });
                }
            }
        }
        try { new F14(); } catch (e) {}
        return a3;
    },
};
const v27 = o26.n;
v27(v27, o26, v27, v27, v27);
gc();
