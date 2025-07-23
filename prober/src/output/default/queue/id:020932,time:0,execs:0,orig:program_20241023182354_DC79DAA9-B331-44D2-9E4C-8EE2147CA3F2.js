class C0 {
    constructor(a2, a3) {
        const t2 = this.__proto__;
        t2.valueOf = a3;
    }
}
const v5 = new C0(C0, C0);
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F6(v5, C0, v5);
for (let i14 = 0, i15 = 10;
    (() => {
        const v16 = i14 < i15;
        const o22 = {
            toString(a18, a19, a20, a21) {
                return a21;
            },
        };
        for (const v23 in o22) {
            v11[v23];
        }
        return v16;
    })();
    i15--) {
}
gc();
