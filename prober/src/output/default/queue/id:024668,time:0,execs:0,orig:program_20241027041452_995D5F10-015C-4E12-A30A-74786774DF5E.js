const v0 = `
    const o14 = {
        [undefined](a4, a5, a6) {
            const o9 = {
                "maxByteLength": 2147483647,
            };
            const v10 = new ArrayBuffer(this, o9);
            const v12 = new Int32Array(v10, a4, Map);
            v12.sort();
        },
    };
    /\u{12345}/myvis;
    class C16 {
    }
    const v17 = new C16();
    function f18() {
        return v0;
    }
    const v19 = v17.constructor;
    const v21 = Symbol.toPrimitive;
    const v23 = new SharedArrayBuffer();
    function f24(a25, a26, a27, a28) {
        const o35 = {
            set b(a30) {
                try { v23(C16, o14, Symbol, f24, a30); } catch (e) {}
                function F32() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                for (let v34 = 0; v34 < 5; v34++) {
                }
            },
        };
        return v0;
    }
    v19[v21] = f18;
    const v37 = createGlobalObject();
    const o38 = {
    };
    const o39 = {
    };
    try { v37.load(v19); } catch (e) {}
`;
eval(v0);
gc();
