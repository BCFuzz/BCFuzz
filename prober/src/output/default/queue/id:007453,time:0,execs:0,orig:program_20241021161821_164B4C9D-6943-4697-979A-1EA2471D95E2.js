function f1(a2) {
    return a2;
}
const v3 = f1.__defineGetter__;
try { v3.call(9007199254740991n); } catch (e) {}
gc();
