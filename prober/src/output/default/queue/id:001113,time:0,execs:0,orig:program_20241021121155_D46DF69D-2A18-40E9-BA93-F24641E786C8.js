let v0 = -65536;
class C1 {
}
const v2 = new C1();
let v3 = new C1();
class C4 extends C1 {
    valueOf(a6, a7, a8) {
        try { v2.toString(v3); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            ({"a":a7,"e":v0,...v3} = C1);
        }
    }
}
const v10 = new C4();
for (let i = 0; i < 5; i++) {
    v0 ^ v10;
    -v10;
}
gc();
