function f0() {
    return f0;
}
for (let i = 0; i < 10; i++) {
    f0();
}
class C2 {
    constructor(a4, a5) {
        const o9 = {
            valueOf() {
                const v7 = this[2361];
                super.b = v7(a5, v7);
                return this;
            },
        };
    }
}
new C2();
new C2();
new C2();
class C16 {
    #h = 4;
    a;
    [-9007199254740992] = "function";
    f = 4;
}
const v17 = new C16();
new C16();
new C16();
class C20 extends C16 {
}
const v21 = new C20();
for (let v22 = 0; v22 < 250; v22++) {
}
try { v21.m(v17); } catch (e) {}
gc();
