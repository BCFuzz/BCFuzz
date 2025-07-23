const o3 = {
    get d() {
        return "undefined";
    },
};
class C4 {
    constructor(a6, a7, a8, a9) {
        a7.__lookupSetter__(a8);
    }
}
new C4("undefined", o3, "d");
gc();
