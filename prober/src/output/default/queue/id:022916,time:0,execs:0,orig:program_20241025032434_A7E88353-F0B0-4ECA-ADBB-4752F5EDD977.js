const o27 = {
    get d() {
        for (let v1 = 0; v1 < 10; v1++) {
            function f2(a3, a4, a5) {
                for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
                }
                const v17 = new Int16Array();
                function f18() {
                    function f19(a20) {
                        return 255n << 255n;
                    }
                    return f19;
                }
                Object.defineProperty(v17, "valueOf", { configurable: true, enumerable: true, get: f18 });
                return ("c" + a3) + v17;
            }
            f2();
        }
        return this;
    },
};
const o28 = {
    ...o27,
};
gc();
