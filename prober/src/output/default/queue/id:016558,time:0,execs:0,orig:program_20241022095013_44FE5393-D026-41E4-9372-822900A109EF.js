function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = v4.__proto__;
v5[8] /= v5;
class C6 {
}
const v7 = new C6();
const v10 = new Uint8Array(210);
for (const v11 of v10) {
    class C14 {
        constructor(a16, a17, a18) {
            function f19() {
                return v11;
            }
            a18 instanceof f19;
        }
    }
    new C14(-506.3727508306688, 2147483647, v7);
}
gc();
