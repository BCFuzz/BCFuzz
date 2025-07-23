const v1 = /\011/dyis;
const v2 = /[z-\d]/yi;
const v3 = /t/myis;
class C4 {
}
const v5 = new C4();
function f6() {
    return v5;
}
function f7(a8) {
    ("g").indexOf(a8, a8);
    return v5;
}
Object.defineProperty(v5, "isFinite", { configurable: true, get: f6, set: f7 });
function f13(a14, a15, a16, a17) {
    a16.isFinite = a17;
    const o18 = {
        __proto__: a16,
    };
    o18.isFinite = a15;
    o18.isFinite = v3;
    return a16;
}
f13(v2, 268435440, v2);
f13(v1, -65537, v3);
f13(v2, 268435440, v5, 3.0);
gc();
