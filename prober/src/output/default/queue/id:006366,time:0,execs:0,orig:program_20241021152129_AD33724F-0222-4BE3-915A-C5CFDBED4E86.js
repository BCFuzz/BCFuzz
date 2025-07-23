function f3() {
    return 2;
}
new Float64Array(255);
const v9 = new BigUint64Array(82);
try { v9.set(v9); } catch (e) {}
1024 << 1024;
new Int16Array(1024);
class C16 {
}
function f17(a18, a19, a20) {
    const o43 = {
        [a20](a22, a23, a24, a25) {
        },
        toString(a27, a28, a29, a30) {
            let v31 = `
                function F32(a34, a35, a36, a37) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F32();
                new F32();
                v31 |= a28?.b;
            `;
            eval(v31);
        },
    };
    return o43;
}
const v44 = f17(f17, C16, C16);
f17(C16, v44, v44);
function f46(a47) {
    function f48() {
    }
    class C49 {
    }
}
Symbol.toPrimitive;
function F52() {
    if (!new.target) { throw 'must be called with new'; }
}
gc();
