class C0 {
    constructor(a2, a3) {
        const t2 = this.__proto__;
        t2.valueOf = a3;
    }
}
new C0(C0, C0);
const v6 = [-9223372036854775807,-536870912,1,64161,1984054296,-24327,1089884286,1073741823];
function f7(a8, a9) {
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
    const v20 = `
        for (let v21 = 0; v21 < 5; v21++) {
            class C22 {
            }
            const v23 = new C22();
            v23.isPrototypeOf();
        }
    `;
    eval(v20);
}
v6[Symbol.toPrimitive] = f7;
const v30 = new Map();
v30 | v6;
gc();
