const o0 = {
};
class C1 {
    get c() {
        this.constructor(this, this, this, C1, this);
    }
}
const v4 = new C1();
function f5() {
    const o10 = {
        o(a7, a8, a9) {
            return C1;
        },
    };
    for (const v11 in o10) {
        o0[v11];
    }
    return C1;
}
v4.constructor = f5;
const v15 = new BigUint64Array(586);
for (const v16 of v15) {
    v4.c;
}
gc();
