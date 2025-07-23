function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C4 {
}
const v5 = new C4();
const v6 = /u?/y;
const v8 = [F0];
const v10 = Reflect.apply(v6.compile, v6, v8);
const v13 = new Float32Array();
const v15 = `
    new Int8Array();
    const v22 = new Uint16Array(1874);
    function f24(a25, a26) {
        v22[1.0] /= 1.0;
        return 8n;
    }
    const v27 = ("boolean").constructor;
    let v28;
    try { v28 = v27.raw(); } catch (e) {}
    function f29(a30, a31) {
        return "boolean";
    }
    switch ("n") {
        case v10:
            function f32(a33) {
                return a33;
            }
            const v34 = f32(255);
            f32(f32);
            function F36(a38, a39, a40) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F36(v34, v28, f32);
            v13[1172] = 251;
            break;
        case Float32Array:
            const o42 = {
            };
            const o44 = {
            };
            const v45 = [-26506,-32957,-9007199254740992,-2005272752];
            for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
                for (let v57 = 0; v57 < 5; v57++) {
                    try { Promise(); } catch (e) {}
                }
            }
            const v60 = v45["reverse"]();
            const v61 = v5(182, o42);
            v2.g = Reflect;
            let v62 = 8n > F0;
            v62 = v60;
            function f63() {
                return v6;
            }
            function f64(a65, a66, a67, a68) {
                return a66;
            }
            Float32Array[o42] = f64;
            for (let v71 = 0; v71 < 5; v71++) {
                const v73 = new Set("copyWithin");
                for (let i75 = 0;
                    (() => {
                        const v78 = i75 < 21768;
                        ("R8Rf")[1155718938];
                        return v78;
                    })();
                    i75++) {
                }
                const v83 = v73.union(v73);
                class C84 {
                }
                const v85 = new C84();
                function f86(a87) {
                    return a87;
                }
                const o88 = {
                };
                o88.get = f86;
                function f89(a90, a91, a92) {
                    Proxy(v85);
                    return f86;
                }
                f89(f89, v83);
            }
            DataView(v61);
            break;
    }
    /\u{12345}/myvis;
`;
eval(v15);
gc();
