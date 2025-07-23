const v0 = /[^Ea\sc]/ygu;
class C2 {
    constructor(a4) {
        try { a4.replace(v0, C2); } catch (e) {}
    }
}
new C2("3");
gc();
