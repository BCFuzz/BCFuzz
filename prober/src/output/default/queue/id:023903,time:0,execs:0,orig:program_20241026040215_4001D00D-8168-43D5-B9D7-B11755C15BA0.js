function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
function f3() {
    return v2;
}
const v4 = [17428,39892,10000,65536,7,-268435456,-62031];
const o5 = {
};
o5.preventExtensions = f3;
const v7 = new Proxy(v4, o5);
const v9 = this.constructor;
try { v9.freeze(v7); } catch (e) {}
gc();
