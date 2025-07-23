const v1 = new WeakMap();
const v2 = WeakMap !== v1;
const v3 = v1.delete(v1);
!v3;
v3 != v2;
for (let v6 = 0; v6 < 250; v6++) {
}
gc();
