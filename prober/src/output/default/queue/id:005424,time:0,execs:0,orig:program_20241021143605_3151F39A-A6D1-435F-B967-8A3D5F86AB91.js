function f2(a3, a4, a5, a6) {
    const v8 = a5--;
    const v9 = /[(?:a?)+wM24(ab|cde)\p{Script=Greek}?]/myg;
    let v10;
    try { v10 = v9.toString(); } catch (e) {}
    const v11 = /7LL(?: foo )/isu;
    const v12 = /(O)/gisu;
    function F13(a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = v10;
    }
    const v18 = new F13();
    v18.b = v18;
    const v19 = new F13();
    v19.length = -4294967296n;
    const v20 = `
        const o21 = {
        };
        function f22() {
            return a5;
        }
        function f23(a24) {
            let v25;
            try { v25 = v11.exec(); } catch (e) {}
            const v27 = BigInt64Array();
            v27 && v27;
            return v25;
        }
        Object.defineProperty(o21, "h", { enumerable: true, get: f22, set: f23 });
    `;
    eval(v20);
    try { a3.toString(1.7976931348623157e+308, v8, a4, v12, "getUint16"); } catch (e) {}
    const v33 = (1.7976931348623157e+308).toString().link(f2);
    const v35 = ("n").toLowerCase;
    try { v35(eval, 1.7976931348623157e+308, 1.7976931348623157e+308); } catch (e) {}
    for (const v37 of v33) {
    }
    const o39 = {
        get stack() {
            return -4294967296n;
        },
    };
    return v11;
}
f2();
f2();
gc();
