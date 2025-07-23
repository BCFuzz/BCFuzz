function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
class C3 {
}
class C4 extends C3 {
}
try { C4.apply(); } catch (e) {}
for (let v6 = 0; v6 < 5; v6++) {
    let v7 = v2 ** v2;
    v7--;
}
for (let i10 = 0; i10 < 21768; i10++) {
}
gc();
