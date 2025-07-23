function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const o4 = {
    "maxByteLength": 1073741823,
};
function f5() {
    return 1073741823;
}
class C6 extends f5 {
    constructor(a8, a9) {
        for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
        }
        super();
        const v22 = Date();
        const o23 = {
            [Math]: v22,
            "h": o4,
            "c": v2,
        };
        JSON.stringify(o23);
    }
}
new C6();
gc();
