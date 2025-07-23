const v1 = `-11${"X"}object`;
class C2 {
}
const o3 = {
};
const v5 = new Proxy(C2, o3);
try { v5.constructor(v1); } catch (e) {}
gc();
