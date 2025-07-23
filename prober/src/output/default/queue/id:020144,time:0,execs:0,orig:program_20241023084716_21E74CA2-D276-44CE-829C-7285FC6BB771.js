for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        for (let i8 = 0, i9 = 10; i8 !== i9; i9--) {
        }
        i3--;
    })()) {
}
function f20(a21) {
    const v22 = `
        function f23(a24) {
            const v25 = /a\nW/vgi;
            const o31 = {
                [v25](a27, a28, a29, a30) {
                },
            };
            return a21;
        }
    `;
    eval(v22);
    return f20;
}
BigInt64Array.toString = f20;
class C34 extends BigInt64Array {
}
const v35 = new C34();
try { v35.slice(v35, BigInt64Array); } catch (e) {}
gc();
