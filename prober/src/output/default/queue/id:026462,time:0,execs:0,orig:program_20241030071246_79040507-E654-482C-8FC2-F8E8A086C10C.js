const o1 = {
};
class C3 extends o1.constructor {
}
const v5 = C3.getOwnPropertyDescriptors(RegExp).rightContext;
try { v5.get(); } catch (e) {}
gc();
