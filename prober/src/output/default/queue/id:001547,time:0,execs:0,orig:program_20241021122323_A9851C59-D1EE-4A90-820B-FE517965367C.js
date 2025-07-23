const v1 = new Int16Array();
const o2 = {
    __proto__: v1,
};
try { ("3").slice(o2); } catch (e) {}
class C5 {
    constructor(a7) {
        const v8 = this.constructor;
        try { new v8(); } catch (e) {}
        a7 / "3";
    }
}
new C5();
gc();
