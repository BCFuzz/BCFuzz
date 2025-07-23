function f0() {
    const o9 = {
        toString(a3, a4) {
            const v5 = this.__proto__;
            const v7 = v5.toLocaleString(v5, v5, this, f0, -841729.3804536108).constructor;
            try { v7.fromCodePoint(-841729.3804536108); } catch (e) {}
            return a4;
        },
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
class C12 extends f0 {
    [v10] = v11;
}
gc();
