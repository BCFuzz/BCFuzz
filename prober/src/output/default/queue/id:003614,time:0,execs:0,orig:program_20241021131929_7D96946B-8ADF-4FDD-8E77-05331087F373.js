function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 {
    constructor() {
        const v5 = this[this];
        for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
            for (let v16 = 0; v16 < 25; v16++) {
            }
            i8 | v5;
        }
    }
    [v2] = v2;
}
new C3();
gc();
