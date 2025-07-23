function f0() {
    Reflect.preventExtensions.call();
    return Reflect;
}
try { f0(); } catch (e) {}
gc();
