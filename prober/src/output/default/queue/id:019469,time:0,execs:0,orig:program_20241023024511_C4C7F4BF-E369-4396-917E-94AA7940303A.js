const o0 = {
};
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(F1, F1);
const v6 = [v5];
const o7 = {
};
o7.has = o0;
const v9 = new Proxy(v6, o7);
try { v9.indexOf(); } catch (e) {}
gc();
