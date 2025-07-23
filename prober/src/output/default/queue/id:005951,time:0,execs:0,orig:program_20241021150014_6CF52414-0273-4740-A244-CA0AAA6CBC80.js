function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 extends F0 {
    constructor(a5) {
        super();
        for (let v6 = 0; v6 < 25; v6++) {
            v2["p" + v6] = v6;
        }
    }
}
new C3(C3);
const o10 = {
    ...v2,
};
gc();
