function f0() {
    const o9 = {
        toString(a2, a3) {
            const v4 = this.__proto__;
            const v6 = v4.toLocaleString(v4, this, v4, f0).constructor;
            return v6.fromCharCode(v6)[0];
        },
    };
    return o9;
}
const v10 = f0();
class C11 {
    static {
        const v13 = this.constructor;
        try { v13(v10); } catch (e) {}
    }
}
gc();
