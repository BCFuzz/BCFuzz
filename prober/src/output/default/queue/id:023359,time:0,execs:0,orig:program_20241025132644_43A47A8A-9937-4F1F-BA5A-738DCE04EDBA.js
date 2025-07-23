class C1 {
}
function f2() {
    function f3(a4, a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            const o10 = {
                "maxByteLength": a9,
            };
            o10.toJSON = o10;
            function f12() {
                return f12;
            }
            const v14 = Date();
            const o15 = {
                [Math]: v14,
                "h": o10,
            };
            o15.toJSON = f12;
            JSON.stringify(o15);
        }
        new F6(a4, a5);
        for (let i21 = 0, i22 = 10; i21 < i22;) {
            i22--;
        }
    }
    return f3;
}
Object.defineProperty(C1, Symbol.toPrimitive, { configurable: true, enumerable: true, get: f2 });
const o31 = {
    [C1]: -1197866576,
};
gc();
