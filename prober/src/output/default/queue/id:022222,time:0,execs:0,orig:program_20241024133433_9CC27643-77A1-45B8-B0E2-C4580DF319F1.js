function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
function f3() {
    return v2;
}
const v5 = [17428,39892,10000,65536,7,-268435456,-62031];
const o6 = {
};
o6.ownKeys = f3;
const v8 = new Proxy(v5, o6);
const v9 = new Uint16Array();
const v11 = this.constructor;
try { v11.defineProperties(v9, v8); } catch (e) {}
gc();
