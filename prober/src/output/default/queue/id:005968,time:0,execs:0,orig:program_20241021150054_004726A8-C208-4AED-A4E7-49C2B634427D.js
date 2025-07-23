function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
new C2();
let v4 = -268435456n;
v4--;
v4 > v4;
const v9 = new Uint32Array(1003);
for (const v10 in v9) {
}
gc();
