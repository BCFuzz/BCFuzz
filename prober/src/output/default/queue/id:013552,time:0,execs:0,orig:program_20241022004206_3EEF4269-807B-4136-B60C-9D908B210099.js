class C0 {
}
const v1 = new C0();
function f2(a3) {
    for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        const v15 = Date();
        JSON.toJSON = i6;
        JSON.stringify(JSON, JSON, v15);
    }
    return a3;
}
v1.constructor = f2;
const t12 = v1.constructor;
t12(C0, v1);
gc();
