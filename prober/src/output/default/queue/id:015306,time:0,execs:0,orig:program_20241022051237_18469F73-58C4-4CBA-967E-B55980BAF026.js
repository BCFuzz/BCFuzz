const v1 = new Map();
function f2() {
    for (let v3 = 0; v3 < 5; v3++) {
        class C4 {
            constructor(a6) {
                this[2032864891] ^= this;
            }
            toString(a8, a9) {
                class C11 {
                }
                const v12 = new C11();
                delete v12[Symbol()];
            }
        }
        new C4(Map);
    }
}
v1[Symbol.toPrimitive] = f2;
class C18 {
    [v1];
}
gc();
