for (let i = 0; i < 5; i++) {
    class C0 {
    }
    const v1 = new C0();
    async function f2(a3, a4, a5) {
        const o6 = {
        };
        const v8 = new Proxy(v1, o6);
        function f9(a10, a11) {
            for (let v12 = 0; v12 < 5; v12++) {
                class C14 extends String {
                    static {
                        this.prototype;
                        try {
                            super.throw();
                        } catch(e18) {
                        }
                    }
                    static {
                        const v20 = [1000000000000.0,902.7612604618062,1e-15,-5.0,-579649.4573167565];
                        v20.push(String);
                        for (const v22 of v20) {
                            v22.__proto__ = v20;
                        }
                    }
                }
            }
            return o6;
        }
        f9();
        v8.then = f9;
        await v8;
        return f9;
    }
    f2(f2, f2, f2);
}
gc();
