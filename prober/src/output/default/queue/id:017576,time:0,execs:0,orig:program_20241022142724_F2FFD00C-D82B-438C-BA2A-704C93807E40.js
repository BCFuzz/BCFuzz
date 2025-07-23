const v0 = [-2.2250738585072014e-308,-1000000000000.0,-3.0];
const o1 = {
};
const v3 = new Proxy(v0, o1);
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
try { v7.__defineSetter__(0.5133934526095973, v3); } catch (e) {}
gc();
