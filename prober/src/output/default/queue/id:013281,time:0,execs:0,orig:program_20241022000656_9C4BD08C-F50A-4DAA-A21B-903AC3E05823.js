function f0() {
    return f0;
}
const v1 = f0();
const v2 = f0();
const v4 = new Date();
function f5(a6, a7, a8) {
    function f9() {
        function f10(a11) {
            Math.sinh(v4);
            return f5;
        }
        return f10;
    }
    function f14(a15) {
        return f5;
    }
    Object.defineProperty(a7, "valueOf", { enumerable: true, get: f9, set: f14 });
    return v4;
}
f5(v1, v2);
f5(v1, v4);
const v18 = [1];
try { v18.copyWithin(f0); } catch (e) {}
gc();
