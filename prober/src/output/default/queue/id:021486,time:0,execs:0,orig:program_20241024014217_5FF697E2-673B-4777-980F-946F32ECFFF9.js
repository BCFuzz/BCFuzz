class C1 {
}
const v2 = new C1();
const v3 = new C1();
const v4 = [9007199254740991,1073741824,16];
function f5(a6, a7) {
    v4.length &&= 2147483648;
}
v4[Symbol.toPrimitive] = f5;
v4.splice(v4, v2, v3);
gc();
