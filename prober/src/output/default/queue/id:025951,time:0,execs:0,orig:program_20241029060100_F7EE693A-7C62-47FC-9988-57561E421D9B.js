const v0 = /((((.).).).)a(?:b)*/vgi;
const v2 = Array(v0);
class C3 {
}
function f4(a5) {
    const v6 = /a\nW/vgi;
    try { v6.toString(); } catch (e) {}
    v2.__proto__ = Array;
    Object.defineProperty(v6, 1540454568, { configurable: true, set: f4 });
    let v8;
    try { v8 = a5.getMilliseconds(); } catch (e) {}
    function f9(a10, a11) {
        const v13 = [f4];
        v13[3329] = -4;
        const v14 = v13.toLocaleString();
        /\P{Any}/v;
        const v17 = 2147483648 + v14;
        try { v17.replaceAll(v0, C3); } catch (e) {}
        -13369 < v8;
    }
    const v22 = Symbol.toPrimitive;
    v6[v22] = f9;
    const o28 = {
        [v6](a24, a25, a26, a27) {
        },
    };
    for (let i31 = 0, i32 = 10;
        (() => {
            const v33 = i31 !== i32;
            return v33 || v33;
        })();
        i32--) {
    }
    return v22;
}
f4(C3);
gc();
