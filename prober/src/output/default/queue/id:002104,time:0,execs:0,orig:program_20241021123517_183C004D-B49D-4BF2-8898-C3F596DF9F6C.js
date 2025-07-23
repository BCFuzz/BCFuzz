function f1() {
    return "object";
}
class C2 {
    toString(a4, a5) {
        const o6 = {
            2: this,
        };
    }
}
const v7 = new C2();
"object" <= f1;
for (let i = 0; i < 5; i++) {
    for (let v9 = 0; v9 < 50; v9++) {
    }
    try { v7.toString(); } catch (e) {}
}
gc();
