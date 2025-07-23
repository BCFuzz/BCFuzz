function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 92; v4++) {
        function f5() {
            return f5;
        }
        function f6(a7, a8) {
            return f6;
        }
        for (let i = 0; i < 25; i++) {
            f6();
        }
        function f10() {
            return f10;
        }
        class C11 extends f0 {
        }
    }
}
new F1(F1);
gc();
