const v1 = new Map();
const v2 = v1.has;
try { v2(); } catch (e) {}
class C4 {
}
class C5 extends C4 {
}
class C6 extends C4 {
}
for (let v7 = 0; v7 < 250; v7++) {
    v7++;
    v7--;
}
gc();
