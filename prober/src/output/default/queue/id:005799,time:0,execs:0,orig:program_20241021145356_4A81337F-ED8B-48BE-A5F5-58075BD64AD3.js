function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4) {
        super();
        `4${a4}unshift`;
    }
}
new C2();
const v9 = new Uint32Array(1000);
for (const v10 in v9) {
}
gc();
