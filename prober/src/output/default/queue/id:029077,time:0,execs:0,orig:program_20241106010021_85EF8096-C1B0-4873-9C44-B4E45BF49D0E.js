const v0 = /(?:ab)?/vgi;
class C1 {
}
function f2(a3) {
    const v4 = /a\nW/vgi;
    let v5;
    try { v5 = v4.toString(); } catch (e) {}
    const v6 = v5.small;
    let v7;
    try { v7 = v6(v0, v4, v6, v0, v6); } catch (e) {}
    Object.defineProperty(v4, 268435440, { configurable: true, set: f2 });
    try { a3.getMilliseconds(v7); } catch (e) {}
    function f9(a10, a11) {
        const v12 = a10.big();
        const v14 = [f2];
        v14[3329] = -4;
        const v17 = 2147483648 + v14.slice();
        try { v17.replaceAll(v0, C1); } catch (e) {}
        return v12;
    }
    v4[Symbol.toPrimitive] = f9;
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
    return v7;
}
f2(C1);
gc();
