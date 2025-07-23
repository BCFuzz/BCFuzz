const v1 = new WeakMap();
const v2 = WeakMap !== v1;
v1.delete() != v2;
for (let v5 = 0; v5 < 250; v5++) {
}
gc();
