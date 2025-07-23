const v1 = /\p{Script_Extensions=Greek}[]((\xed\xa0\x80))\x02?/mdys.toString;
function f2(a3, a4) {
    const v7 = `
        const o8 = {
        };
        /\u{12345}/myvis;
    `;
    const v10 = v7.split(8);
    const v11 = [2.0,-4.0];
    function f12(a13, a14, a15) {
        return f2;
    }
    const v16 = f12(f12, v7, v11);
    function F17(a19, a20, a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        a22.constructor(v10);
    }
    Object.defineProperty(F17, "constructor", { enumerable: true, value: runString });
    const v24 = new F17(v11, f12, v16, F17);
    return v24;
}
v1[Symbol.toPrimitive] = f2;
try { ("toISOString").lastIndexOf(v1); } catch (e) {}
gc();
