function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this?.constructor;
    try { new v7(-9223372036854775808, -2147483649); } catch (e) {}
    this.b = a6;
}
new F3(-9007199254740991, -2147483649);
const v10 = new F3(-2147483649, -9223372036854775808);
new F3(-9223372036854775808, -9007199254740991);
function f12() {
    return v10;
}
try { new Set(); } catch (e) {}
const v15 = new Set();
function F16() {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F16();
const v19 = v18?.constructor;
try { new v19(); } catch (e) {}
async function f21(a22, a23, a24) {
    a22.length = a22;
    a23.c = a23;
    try { a24.c(v15, a23, a22); } catch (e) {}
    function f26(a27, a28) {
        a28.length = a28;
        function f29(a30) {
            const o33 = {
                "maxByteLength": 2312845920,
            };
            const v34 = o33?.__defineSetter__;
            try { new v34(ArrayBuffer, f29); } catch (e) {}
            const v37 = new ArrayBuffer(750704325, o33);
            try { v37.resize(750704325); } catch (e) {}
            return a30;
        }
        try { new f29(-9007199254740991); } catch (e) {}
        f29(f21);
        f29();
        f29();
        for (let v43 = 0; v43 < 5; v43++) {
            const v44 = f29(F16);
            try { new v44(); } catch (e) {}
        }
    }
    f26.arguments;
    a24.then = f26;
    return a24;
}
gc();
