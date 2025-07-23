for (let v0 = 0; v0 < 10; v0++) {
    class C1 {
    }
    const v2 = new C1();
    async function f3(a4, a5, a6) {
        const o7 = {
        };
        const v9 = new Proxy(v2, o7);
        return await v9;
    }
    f3();
}
const o17 = {
    toString(a14, a15) {
        const t14 = this.__proto__;
        t14.g = 7;
        return 7;
    },
};
o17.toString();
gc();
