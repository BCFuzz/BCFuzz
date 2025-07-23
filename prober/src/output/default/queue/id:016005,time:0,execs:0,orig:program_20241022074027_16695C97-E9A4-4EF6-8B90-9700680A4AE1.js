class C0 {
}
const v1 = C0.toString(C0, C0);
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11) {
        function f12() {
            const v14 = ([5895,257,-26453,-31057,1073741823]).shift;
            try { v14.call(v1); } catch (e) {}
            for (let i18 = 0, i19 = 10; i18 <= i19; i19--) {
            }
            return a11;
        }
        ([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f12);
        return a8;
    }
    Object.defineProperty(this, "f", { set: f10 });
    this.f = v4;
}
new F5(v1, v4, v4);
gc();
