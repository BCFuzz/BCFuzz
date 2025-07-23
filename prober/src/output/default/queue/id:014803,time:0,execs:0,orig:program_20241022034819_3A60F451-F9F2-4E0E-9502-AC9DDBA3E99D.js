function f0() {
}
const v1 = f0();
const o3 = {
};
class C5 extends o3.constructor {
}
try { C5.fromEntries(v1); } catch (e) {}
const v8 = C5.getOwnPropertyDescriptors(RegExp).$1;
try { v8.get(); } catch (e) {}
gc();
