const o1 = {
};
function f2(a3, a4) {
    return a4;
}
o1.get = f2;
const v6 = new Proxy(AggregateError, o1);
try { new v6(v6, o1, f2, o1); } catch (e) {}
gc();
