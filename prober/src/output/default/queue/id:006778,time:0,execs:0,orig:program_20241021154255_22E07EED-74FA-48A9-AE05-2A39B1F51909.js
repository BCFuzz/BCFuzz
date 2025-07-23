function f1() {
    return false;
}
const v2 = [false,false,false];
v2[Symbol.toPrimitive] = f1;
-23471n == v2;
for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
}
gc();
