function f0() {
    const o10 = {
        toString(a3, a4) {
            return this.__proto__.toLocaleString().constructor.fromCharCode(65537)[0];
        },
    };
    return o10;
}
const v11 = f0();
class C12 {
    static {
        const v14 = this.constructor;
        try { v14(v11); } catch (e) {}
    }
}
gc();
