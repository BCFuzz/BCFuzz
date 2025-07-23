const v1 = new Int16Array();
class C2 {
}
const v3 = new C2();
v3.__proto__ = v1;
const v5 = new Int16Array(3681);
for (const v6 in v5) {
}
gc();
