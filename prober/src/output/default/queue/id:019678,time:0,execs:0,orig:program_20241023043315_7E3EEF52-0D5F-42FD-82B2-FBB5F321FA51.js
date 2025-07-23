function f0() {
    const o5 = {
        "d": -15,
        ..."number",
        [-15](a4) {
        },
    };
    return o5;
}
const v6 = f0();
const v7 = f0();
const v8 = f0();
const v10 = [10128n,10128n,10128n,10128n,10128n];
const o11 = {
};
class C12 {
    get c() {
        this.constructor(C12, this);
    }
}
const v15 = new C12();
function f16() {
    const o21 = {
        o(a18, a19, a20) {
            return a18;
        },
        [f0]: v7,
        "h": v10,
        "a": v6,
        ...v8,
        "f": 10128n,
        "e": v8,
    };
    for (const v22 in o21) {
        o11[v22];
    }
    return v15;
}
v15.constructor = f16;
const v26 = new BigUint64Array(586);
for (const v27 of v26) {
    v15.c;
}
gc();
