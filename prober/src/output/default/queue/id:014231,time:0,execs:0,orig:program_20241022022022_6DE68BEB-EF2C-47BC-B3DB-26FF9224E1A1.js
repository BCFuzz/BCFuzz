function f1() {
    return Reflect;
}
const v3 = new Proxy(f1, Reflect);
v3 instanceof f1;
gc();
