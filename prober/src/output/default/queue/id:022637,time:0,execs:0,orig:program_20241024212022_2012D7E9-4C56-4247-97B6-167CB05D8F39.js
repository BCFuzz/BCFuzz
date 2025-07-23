function f1() {
    return f1;
}
const v2 = new Number();
v2.get = f1;
const v4 = new Proxy(Number, v2);
try { new v4(v2, v4, v4); } catch (e) {}
gc();
