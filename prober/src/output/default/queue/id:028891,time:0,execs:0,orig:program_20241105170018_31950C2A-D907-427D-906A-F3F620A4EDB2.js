const v0 = /(?:ab)?/vgi;
class C1 {
}
function f2(a3) {
    const v4 = /a\nW/vgi;
    try { v4.toString(); } catch (e) {}
    Object.defineProperty(v4, 268435440, { configurable: true, set: f2 });
    let v6;
    try { v6 = a3.getMilliseconds(); } catch (e) {}
    function f7(a8, a9) {
        const v11 = [f2];
        v11[3329] = -4;
        const v12 = v11.toLocaleString();
        /\P{Any}/v;
        const v15 = 2147483648 + v12;
        try { v15.replaceAll(v0, C1); } catch (e) {}
        -13369 < v6;
    }
    const v20 = Symbol.toPrimitive;
    v4[v20] = f7;
    const o26 = {
        [v4](a22, a23, a24, a25) {
        },
    };
    for (let i29 = 0, i30 = 10;
        (() => {
            const v31 = i29 !== i30;
            return v31 || v31;
        })();
        i30--) {
    }
    return v20;
}
f2(C1);
gc();
