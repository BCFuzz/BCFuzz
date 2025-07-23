const v0 = [1000000.0,1.3279521785221995,1.7976931348623157e+308,-1000000.0];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
function f4(a5, a6) {
}
Object.defineProperty(f4, "F59", { configurable: true, value: v0 });
for (let v7 = 0; v7 < 5; v7++) {
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        F9.name in a12;
    }
    new F9(v3, F1);
    new F9(196.25100004624983, f4);
}
gc();
