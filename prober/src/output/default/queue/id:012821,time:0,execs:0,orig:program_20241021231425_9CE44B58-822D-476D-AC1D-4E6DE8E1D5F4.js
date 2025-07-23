class C0 {
    static set b(a2) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v4 = new C0();
const o5 = {
    __proto__: C0,
};
C0.b = v4;
for (let v6 = 0; v6 < 5; v6++) {
    function f7() {
        const v11 = new Int16Array(v6);
        new Int16Array(4096, ...v11, ..."boolean");
        return "boolean";
    }
    const v13 = [65535];
    for (let i = 0; i < 5; i++) {
        v13.some(f7);
    }
}
gc();
