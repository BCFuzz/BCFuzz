const v1 = [-2147483648n,-2147483648n,-2147483648n,-2147483648n,-2147483648n];
function f2() {
    return -2147483648n;
}
v1[Symbol.toPrimitive] = f2;
class C5 {
    constructor(a7, a8) {
        for (let i = 0; i < 10; i++) {
            try { Math.atan(v1); } catch (e) {}
            const v13 = new Int32Array(255);
            for (const v14 in v13) {
            }
        }
    }
}
new C5();
gc();
