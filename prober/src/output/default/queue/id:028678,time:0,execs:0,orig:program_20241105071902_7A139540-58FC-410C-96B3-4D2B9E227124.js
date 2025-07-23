const o41 = {
    n(a1, a2, a3) {
        for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
        }
        function f15(a16, a17) {
            return this;
        }
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            for (let i24 = 0, i25 = 10;
                (() => {
                    const v26 = i24 < i25;
                    function f28(a29, a30) {
                        return i24;
                    }
                    for (const v31 in "NEGATIVE_INFINITY") {
                        Object.defineProperty(arguments, v31, { get: f28 });
                    }
                    for (const v33 in "NEGATIVE_INFINITY") {
                        Object.defineProperty(arguments, v33, { get: f15 });
                    }
                    a21(v26);
                    return v26;
                })();
                ) {
            }
        }
        try { new F18(a2, f15); } catch (e) {}
        return a1;
    },
};
const t31 = o41.n;
t31();
gc();
