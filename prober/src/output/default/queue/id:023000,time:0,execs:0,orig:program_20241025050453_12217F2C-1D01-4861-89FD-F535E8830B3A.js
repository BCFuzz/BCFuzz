for (let v0 = 0; v0 < 10; v0++) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        let v7;
        try { v7 = a5(); } catch (e) {}
        const v10 = [-2147483647,536870889,21578,-2147483648];
        function f11() {
            return f11;
        }
        function f12(a13) {
            return v10;
        }
        Object.defineProperty(v10, Symbol.toPrimitive, { get: f11, set: f12 });
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            Symbol.toPrimitive;
            function f23() {
                a18[Symbol.toPrimitive] = 0.10072205427111425;
                return arguments;
            }
            f23(Float64Array, 1.4471392750174351e+308, 5, v7, Float64Array);
        }
        new F16(F16);
        new F16(v10);
    }
    new F2(v0, v0);
}
gc();
