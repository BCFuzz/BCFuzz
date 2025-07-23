const v2 = /a.xyz{0,1}r+/dvs;
const v3 = /a\nW/vgi;
function f4(a5, a6, a7, a8) {
    let v10 = 9007199254740990n;
    const v11 = v10--;
    const v12 = /[(?:a?)+wM24(ab|cde)\p{Script=Greek}?]/myg;
    let v13;
    try { v13 = v12.toString(); } catch (e) {}
    const v14 = /7LL(?: foo )/isu;
    const v15 = /(O)/gisu;
    function F17(a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = v13;
    }
    const v22 = new F17();
    v22.b = v22;
    const v23 = new F17();
    v23.length = -4294967296n;
    const v24 = `
        const v26 = ("-13")[undefined];
        const o27 = {
        };
        function f28() {
            return a7;
        }
        function f29(a30) {
            try { v14.exec(a8); } catch (e) {}
            return f28;
        }
        Object.defineProperty(o27, "h", { enumerable: true, get: f28, set: f29 });
        const o32 = {
        };
        o32.h = v26;
    `;
    eval(v24);
    let v35;
    try { v35 = a5.toString(1.7976931348623157e+308, v11, a6, v15, "getUint16"); } catch (e) {}
    v35.length;
    a5.b = "getUint16";
    const v37 = (1.7976931348623157e+308).toString();
    v37.g = v37;
    const v38 = v37.link(f4);
    const v40 = ("n").toLowerCase;
    try { v40(v40, 1.7976931348623157e+308, 1.7976931348623157e+308); } catch (e) {}
    for (const v42 of v38) {
    }
    const o45 = {
        get stack() {
            const o44 = {
            };
            return o44;
        },
    };
    return F17;
}
f4(v3);
f4(v2);
gc();
