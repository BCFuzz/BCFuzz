function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 16;
    this.f = 16;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C6 extends F0 {
    static #b = v3;
    p(a8, a9) {
        super.c = a8;
        try { a9.padEnd(this, v3); } catch (e) {}
        const o11 = {
            [v3]: v5,
            __proto__: v3,
        };
        for (let v12 = 0; v12 < 32; v12++) {
            o11["p" + v12] = v12;
        }
        return o11;
    }
}
new C6();
new C6();
new C6();
function f18() {
    return v3;
}
4294967297n % 4294967297n;
-1000000000.0 & -1000000000.0;
-1000000000000.0 - -1000000000000.0;
const v28 = `
    (1 / Infinity) ** Infinity;
`;
try { eval(v28); } catch (e) {}
eval(v28);
gc();
