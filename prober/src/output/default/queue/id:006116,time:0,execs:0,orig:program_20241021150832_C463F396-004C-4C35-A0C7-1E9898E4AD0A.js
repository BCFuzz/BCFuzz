function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v3 = [2744,-15826,53999,-4294967296,2147483648,536870889,-128,38977];
v3[93] = v2;
v3.concat(v3);
gc();
