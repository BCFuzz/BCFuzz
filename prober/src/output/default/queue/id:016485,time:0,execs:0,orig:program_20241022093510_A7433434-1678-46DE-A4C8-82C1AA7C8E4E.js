class C0 {
    constructor(a2, a3) {
        const t2 = this.__proto__;
        t2.valueOf = a3;
    }
}
new C0(C0, C0);
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F6();
for (let i14 = 0, i15 = 10;
    (() => {
        const v16 = i14 < i15;
        const o21 = {
            o(a18, a19, a20) {
                return this;
            },
        };
        for (const v22 in o21) {
            v11[v22];
        }
        return v16;
    })();
    i15--) {
}
gc();
