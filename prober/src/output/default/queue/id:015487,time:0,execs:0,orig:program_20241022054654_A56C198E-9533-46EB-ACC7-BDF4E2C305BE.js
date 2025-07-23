const v2 = new Uint16Array(11);
class C3 {
    d = v2;
}
const v4 = new C3();
const v5 = v4.d;
const o6 = {
};
const v7 = o6.constructor;
try { v7.seal(v5); } catch (e) {}
gc();
