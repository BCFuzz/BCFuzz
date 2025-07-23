const o1 = {
};
const v2 = o1.constructor;
class C3 extends v2 {
}
const v5 = C3.getOwnPropertyDescriptors(RegExp).lastParen;
const v7 = v5 >= o1 ? v5 : o1;
try { v7.get(v7, v7, v2, v5); } catch (e) {}
gc();
