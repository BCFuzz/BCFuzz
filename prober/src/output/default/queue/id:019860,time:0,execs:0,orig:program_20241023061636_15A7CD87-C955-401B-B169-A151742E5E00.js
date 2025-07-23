const v1 = new Set();
const v2 = v1.add();
class C3 extends Set {
}
const v5 = [];
v5.push(v2);
const v7 = Reflect.construct(C3, v5);
v7.delete();
v7.difference(v7);
gc();
