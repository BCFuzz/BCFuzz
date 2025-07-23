for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
    }
    const v2 = new C1();
    function f3() {
    }
    Object.defineProperty(v2, "then", { configurable: true, enumerable: true, get: f3 });
    async function f4(a5, a6, a7) {
        const o8 = {
        };
        const v10 = new Proxy(v2, o8);
        await v10;
        return v0;
    }
    f4(v2, v0, v0);
}
gc();
