const v0 = [-1e-15,0.06839406266266224,1.4378119170358279e+308,-1000.0,-2.220446049250313e-16];
const v2 = `
    class C3 {
    }
    function f4() {
        return f4;
    }
    async function f5(a6, a7) {
        const o8 = {
        };
        o8.h = C3;
        const o9 = {
        };
        o9 * v0;
        new Uint16Array();
        new Int16Array();
        Uint16Array.toString();
        new Uint16Array(o9);
        o9.h = C3;
        o9.d = -1.7976931348623157e+308;
        const o17 = {
        };
        o17.h = C3;
        o17.d = -1.7976931348623157e+308;
        o17.e = a6;
        const o18 = {
        };
        o18.e = o18;
        o18.h = C3;
        o18.d = -1.7976931348623157e+308;
        o18.e = f4;
        const t31 = (await o17)?.h;
        new t31();
    }
    f5(v0, v2);
`;
eval(v2);
gc();
