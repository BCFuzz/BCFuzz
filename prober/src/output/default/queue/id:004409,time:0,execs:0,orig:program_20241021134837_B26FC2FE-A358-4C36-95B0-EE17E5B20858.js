class C1 {
    #n(a3, a4) {
    }
}
const v5 = new C1();
function f6(a7) {
    return -1e-15;
}
v5.toString = f6;
new C1();
class C9 extends C1 {
    constructor(a11, a12, a13) {
        super();
        try { new g(); } catch (e) {}
    }
}
new C9();
function F17() {
    if (!new.target) { throw 'must be called with new'; }
}
const v19 = new F17();
const v20 = new F17();
const v21 = new F17();
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    a24[0] = this;
    a25.g = a25;
    this.a = v19;
    this.h = a24;
}
new F22(v20, v21);
const v27 = new F22(v20, v21);
new F22(v21, v19);
v27 !== v19;
class C30 {
}
for (let v31 = 0; v31 < 5; v31++) {
}
class C32 {
}
for (let v33 = 0; v33 < 100; v33++) {
}
for (let v34 = 0; v34 < 250; v34++) {
}
gc();
