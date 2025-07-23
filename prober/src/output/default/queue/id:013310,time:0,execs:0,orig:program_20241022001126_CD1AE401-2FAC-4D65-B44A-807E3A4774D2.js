function f0() {
    function f1(a2) {
        return a2;
    }
    return f1;
}
const v4 = String.prototype;
v4[Symbol.toPrimitive] = f0;
try { v4.substr(); } catch (e) {}
for (let i10 = 10, i11 = 10; -13369 < i11; i11--) {
}
gc();
