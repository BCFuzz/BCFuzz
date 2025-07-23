function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4) {
        super();
        for (let v5 = 0; v5 < 25; v5++) {
            const v7 = new Int16Array(this, C2, C2);
            const v8 = v7[1];
            const v10 = v8?.[WeakMap];
            v10 != v8 ? v10 : v8;
            for (let v13 = 0; v13 < 50; v13++) {
            }
        }
    }
}
new C2();
gc();
