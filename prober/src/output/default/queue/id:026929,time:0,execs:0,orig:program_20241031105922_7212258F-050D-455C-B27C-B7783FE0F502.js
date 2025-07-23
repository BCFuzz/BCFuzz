const v0 = `
    function f1(a2, a3) {
        for (let v4 = 0; v4 < 250; v4++) {
            const v5 = /\P{Decimal_Number}(a\bceW)/mis;
            v5.test(v5);
        }
        return a3;
    }
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function f13() {
            return f1;
        }
        function f14(a15) {
            return a15;
        }
        Object.defineProperty(a9, "constructor", { enumerable: true, get: f13, set: f14 });
        const t17 = a11.constructor;
        t17();
    }
    new F7(F7, F7, F7);
`;
eval(v0);
gc();
