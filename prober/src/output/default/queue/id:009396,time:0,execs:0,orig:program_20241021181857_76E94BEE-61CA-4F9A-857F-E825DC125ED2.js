function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        let v4 = 1.7976931348623157e+308;
        v4--;
        function f6(a7, a8, a9, a10) {
            const v12 = v4.toString(a9).link();
            for (const v13 of v12) {
            }
            return v12;
        }
        f6(this, v4, a3, F0);
        return f2;
    }
    f2();
    f2();
}
const v17 = new F0();
const v18 = v17.constructor;
new v18(v18, v17, v18, v17, v18);
gc();
