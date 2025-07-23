new Array(16);
function f6() {
    return 16;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    this.h = a10;
}
new F7(-1.7976931348623157e+308, -1.7976931348623157e+308, -1000.0);
new F7(-6.648068562951989, -1.7976931348623157e+308, -1000.0);
new F7(-6.648068562951989, -6.648068562951989, -6.648068562951989);
const v19 = /a[a-z]*/mdygsu;
function f20(a21) {
    function F22() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F22();
    async function f25(a26, a27, a28) {
        function f29(a30, a31) {
            function f32(a33) {
                const o36 = {
                    "maxByteLength": 2312845920,
                };
                new ArrayBuffer(750704325, o36);
                return a33;
            }
            f32(f25);
            f32();
            f32();
            for (let v42 = 0; v42 < 5; v42++) {
                f32(F22);
            }
        }
        a28.then = f29;
        return a28;
    }
    return v19;
}
v19[Symbol.toPrimitive] = f20;
try { v19.compile(65536, v19); } catch (e) {}
gc();
