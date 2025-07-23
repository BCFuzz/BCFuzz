function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F2 {
    6 = 1024;
}
const v7 = new C6();
class C8 {
    constructor() {
        for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
            v7[-19370] = i13;
            for (let v20 = 0; v20 < 25; v20++) {
            }
        }
    }
}
new C8();
gc();
