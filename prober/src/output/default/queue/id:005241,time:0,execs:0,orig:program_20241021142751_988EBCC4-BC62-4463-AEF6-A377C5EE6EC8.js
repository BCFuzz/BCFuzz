class C0 {
}
const o11 = {
    toString(a2, a3) {
        const v4 = new C0();
        const v5 = a3?.constructor;
        try { v5(); } catch (e) {}
        this.__proto__;
        for (let v8 = 0; v8 < 250; v8++) {
            v8++;
            v8--;
        }
        return v4;
    },
};
o11.toString();
gc();
