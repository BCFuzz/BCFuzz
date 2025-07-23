function f2() {
    const o31 = {
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
                        Reflect.apply(v17, v14, v16);
                        Reflect.ownKeys();
                        return Reflect;
                    }
                    f13.call(i8, i8, f2, a4, i9);
                })()) {
            }
            return this.toString(Int8Array, a4, 1024, f2, this);
        },
        get g() {
            function f26(a27) {
                const o30 = {
                    o(a29) {
                        return 1024;
                    },
                };
                return f2;
            }
            return 1024;
        },
    };
    try { o31.toString(Int8Array, 1024); } catch (e) {}
    return f2;
}
const v33 = f2();
let v34 = 257;
const v35 = v34--;
function f36(a37, a38, a39, a40) {
    const v42 = 2147483648 * v34;
    v42 * v42;
    const v44 = v33.toString();
    for (const v46 of v44.link(v44)) {
    }
    return Int8Array;
}
f36(v33, f2, f36, f36(v35, v34, f2, Int8Array));
gc();
