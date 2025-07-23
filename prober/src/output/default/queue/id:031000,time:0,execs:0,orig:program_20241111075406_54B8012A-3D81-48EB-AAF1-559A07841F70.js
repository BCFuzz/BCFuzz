class C1 {
}
const v2 = new C1();
function f3(a4) {
    return -0.2887845379993088;
}
v2[Symbol.toPrimitive] = f3;
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = a9--;
    for (let v11 = 0; v11 < 5; v11++) {
        for (let i14 = -3, i15 = v11; i14 **= v10, -13369 < i15; i15--) {
            v11 /= i15;
        }
    }
}
new F7(v2);
gc();
