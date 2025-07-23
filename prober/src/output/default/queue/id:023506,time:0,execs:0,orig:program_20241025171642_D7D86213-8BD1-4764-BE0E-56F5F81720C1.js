class C0 {
}
const v1 = new C0();
const v2 = /u?/y;
const v4 = [];
const v6 = Reflect.apply(v2.compile, v2, v4);
const v9 = new Float32Array();
const v11 = `
    const v13 = ("boolean").constructor;
    try { v13.raw(); } catch (e) {}
    function f15(a16, a17) {
        return a17;
    }
    switch ("n") {
        case v6:
            v9[1172] = 251;
            break;
        case Float32Array:
            const o18 = {
            };
            const o20 = {
            };
            ([-26506,-32957,-9007199254740992,-2005272752])["reverse"]();
            const v24 = v1(182, o18);
            for (let v27 = 0; v27 < 5; v27++) {
                const v29 = new Set("copyWithin");
                for (let i31 = 0;
                    (() => {
                        const v34 = i31 < 21768;
                        ("R8Rf")[1155718938];
                        return v34;
                    })();
                    i31++) {
                }
                const v39 = v29.union(v29);
                class C40 {
                }
                const v41 = new C40();
                function f42(a43, a44, a45) {
                    return Proxy(v41);
                }
                f42(f42, v39);
            }
            DataView(v24);
            break;
    }
    /\u{12345}/myvis;
`;
eval(v11);
gc();
