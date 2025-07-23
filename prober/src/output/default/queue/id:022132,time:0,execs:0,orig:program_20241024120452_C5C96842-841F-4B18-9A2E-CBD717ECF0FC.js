function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
    }
    let v9;
    try { v9 = a4(); } catch (e) {}
    const v13 = [-2147483647,536870889,21578,-2147483648];
    function f14() {
    }
    function f15(a16) {
    }
    Object.defineProperty(v13, Symbol.toPrimitive, { get: f14, set: f15 });
    function F19(a21, a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = F1;
        a21[Symbol.toPrimitive] = f5;
        function f26() {
            a21[Symbol.toPrimitive] = 0.10072205427111425;
            return arguments;
        }
        f26(Float64Array, 1.4471392750174351e+308, 5, v9, Float64Array);
    }
    new F19(0.5722761262546093);
    new F19(F19);
    new F19(v13);
}
new F1();
new F1();
new F1();
class C36 extends F1 {
}
new C36();
gc();
