const o1 = {
};
function f2(a3, a4) {
    return a4;
}
o1.get = f2;
const v6 = new Proxy(TypeError, o1);
try { new v6(Proxy, v6, v6, TypeError, v6); } catch (e) {}
gc();
