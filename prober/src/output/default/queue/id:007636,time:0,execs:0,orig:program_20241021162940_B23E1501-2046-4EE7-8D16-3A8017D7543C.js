function f0(a1) {
    const o28 = {
        valueOf(a3) {
            for (let v4 = 0; v4 < 10; v4++) {
                class C5 {
                    static {
                        this.toString();
                    }
                }
                function f8(a9, a10) {
                    const o11 = {
                    };
                    return o11;
                }
                const v13 = new Set();
                const v15 = v13.union(v13).entries();
                class C16 {
                    2359 = v15;
                }
                const v17 = new C16();
                async function f18(a19, a20, a21) {
                    const o22 = {
                    };
                    const v24 = new Proxy(v17, o22);
                    await v24;
                }
                f18();
            }
            for (let v27 = 0; v27 < 10; v27++) {
            }
            return a1;
        },
    };
    return o28;
}
class C29 extends f0 {
    static toString(a31, a32, a33) {
    }
    #c;
}
const v34 = new C29();
v34.valueOf();
gc();
