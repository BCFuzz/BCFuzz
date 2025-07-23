function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
class C4 {
    constructor(a6, a7, a8) {
        function f9() {
            return this;
        }
        -506.3727508306688 instanceof f9;
    }
}
new C4(C4, -506.3727508306688, C4);
for (let v12 = 0; v12 < 250; v12++) {
}
gc();
