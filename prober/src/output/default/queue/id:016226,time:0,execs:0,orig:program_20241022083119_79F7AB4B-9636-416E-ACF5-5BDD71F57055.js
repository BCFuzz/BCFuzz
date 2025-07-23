function f2() {
    const o30 = {
        toString(a4, a5) {
            for (let i8 = 0, i9 = 10;
                i8 < i9;
                (() => {
                    function f13() {
                        const v14 = /u?/y;
                        const v16 = [];
                        const v17 = v14.compile;
                        for (let v18 = 0; v18 < 5; v18++) {
                        }
                        let v19;
                        try { v19 = v17.n(-3.0); } catch (e) {}
                        let v20 = v19.__proto__;
                        v20 |= -268435456;
                        Reflect.apply(v17, v14, v16);
                        return v14;
                    }
                })()) {
            }
            return a4;
        },
        get g() {
            function f25(a26) {
                const o29 = {
                    o(a28) {
                        return this;
                    },
                };
                return f25;
            }
            return this;
        },
    };
    return f2;
}
const v31 = f2();
function f33(a34, a35, a36, a37) {
    const v39 = 2147483648 * 257;
    v39 * v39;
    const v41 = v31.toString(v39, a35, -3.0);
    const v42 = v41.link(v41);
    for (const v43 of v42) {
        try { a35(); } catch (e) {}
    }
    return v42;
}
f33();
gc();
