class C0 {
    constructor(a2) {
    }
}
class C4 {
    constructor(a6) {
        try { ("1073741823").repeat(a6); } catch (e) {}
    }
    toString(a9, a10) {
        const t9 = "1073741823";
        delete t9.length;
    }
}
const v12 = new C4();
new C4(v12);
new C0();
gc();
