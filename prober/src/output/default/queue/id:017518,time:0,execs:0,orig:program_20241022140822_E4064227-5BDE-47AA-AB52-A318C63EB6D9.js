function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1(F1, F1);
const v8 = new Int32Array(681);
function f9(a10, a11, a12, a13) {
    function f14() {
        function f16() {
        }
        f16.toString();
        return arguments;
    }
    f14();
}
v8.map(f9);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
