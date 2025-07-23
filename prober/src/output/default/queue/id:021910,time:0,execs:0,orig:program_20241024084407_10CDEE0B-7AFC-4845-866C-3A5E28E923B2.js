const o1 = {
};
class C3 extends o1.constructor {
}
const v5 = C3.getOwnPropertyDescriptors(RegExp).leftContext;
try { v5.get(); } catch (e) {}
gc();
