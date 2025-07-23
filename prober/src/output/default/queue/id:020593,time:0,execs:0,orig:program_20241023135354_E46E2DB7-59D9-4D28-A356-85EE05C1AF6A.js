const o1 = {
};
const v2 = o1.constructor;
class C3 extends v2 {
}
const v4 = C3.getOwnPropertyDescriptors(RegExp);
const v6 = v4.$_.get;
try { v6.call(v4, v6, o1, o1, v2); } catch (e) {}
gc();
