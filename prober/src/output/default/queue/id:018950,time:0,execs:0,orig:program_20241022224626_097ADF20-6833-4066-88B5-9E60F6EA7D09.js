class C0 {
    constructor(a2, a3) {
        a2?.[1858];
    }
}
class C5 extends C0 {
}
const v6 = new C5();
const v7 = v6.constructor;
const v8 = new v7(C0, v6, C0, C5, v7);
function f9() {
    return arguments;
}
v8.constructor = f9;
const t14 = v8.constructor;
t14();
new C5();
for (let v14 = 0; v14 < 250; v14++) {
    v14++;
    v14--;
}
gc();
