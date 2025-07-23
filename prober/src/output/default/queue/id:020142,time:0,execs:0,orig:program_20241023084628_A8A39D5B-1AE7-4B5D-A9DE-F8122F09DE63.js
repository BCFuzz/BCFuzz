function f1() {
    return Function;
}
const v2 = Function();
v2.get = f1;
const v4 = new Proxy(Function, v2);
try { new v4(); } catch (e) {}
gc();
