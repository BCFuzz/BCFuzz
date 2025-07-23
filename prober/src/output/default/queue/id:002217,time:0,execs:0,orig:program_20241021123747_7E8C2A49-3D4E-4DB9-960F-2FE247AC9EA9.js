const v0 = /a.xyz{0,1}r+/dvs;
const v1 = /2(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\1030Y/mdyi;
function f2(a3, a4, a5, a6) {
    a4.global = a4;
    a6.global = a6;
    const v7 = [-4.0,-3.0,1000000000.0,-1.7976931348623157e+308,-4.2267025509389794e+307,0.7757437941691913];
    const v9 = new Uint8ClampedArray();
    const v10 = v9.constructor;
    const v11 = new v10();
    let v12;
    try { v12 = a3.toString(v10, v11, v7, a5); } catch (e) {}
    let v13;
    try { v13 = v12.link(f2); } catch (e) {}
    const v14 = a5.global;
    for (const v16 of v13) {
        const t15 = "n";
        t15.toString = v16;
    }
    const o43 = {
        [a3](a18, a19, a20, a21) {
            WeakSet();
            BigInt64Array();
            ("MIN_VALUE")["padEnd"]();
            a18[Promise] = "n";
            const t24 = "POSITIVE_INFINITY";
            delete t24[Set];
            try { a3(this, ..."n", ...a20, ...a19, ...a18, this, a21, ...a5, ...v14); } catch (e) {}
        },
        get stack() {
            const o35 = {
            };
            function f36(a37, a38) {
                return v1;
            }
            class C39 {
                constructor(a41, a42) {
                }
            }
            return this;
        },
    };
    return v7;
}
f2(f2, v0, v1, v1);
gc();
