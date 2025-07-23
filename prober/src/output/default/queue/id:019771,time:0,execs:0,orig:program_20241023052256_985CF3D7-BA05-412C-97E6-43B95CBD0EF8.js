class C0 {
}
const v1 = [C0];
const o2 = {
};
o2.toJSON = v1;
function f3() {
    return f3;
}
class C4 extends f3 {
    constructor(a6, a7) {
        for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
        }
        super();
        const v20 = Date(a7);
        const o21 = {
            [Math]: v20,
            "h": o2,
        };
        JSON.stringify(o21);
    }
}
new C4(C0, f3);
gc();
