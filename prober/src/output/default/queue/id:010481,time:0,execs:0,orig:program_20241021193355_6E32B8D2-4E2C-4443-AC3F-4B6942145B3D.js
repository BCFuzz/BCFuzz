function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v3 = delete v2.c;
try { v3(v3, v3); } catch (e) {}
const v5 = [268435456,-924754394,13,-54297,536870887,1073741824,8,1073741825,11,10000];
let v7 = 9007199254740990;
-4294967297 * v5;
--v7;
v7 ^ -4294967297;
for (let v11 = 0; v11 < 250; v11++) {
    v11++;
    v11--;
}
gc();
