const v0 = [1.0,1.6911655601307732e+308,-1.7162313596514939e+308,-549433.9632247431,5.0,2.9652386856162626e+307,2.220446049250313e-16];
class C1 {
}
const v2 = `
    async function* f3(a4, a5) {
        try { Uint8Array.fromHex(a5, Uint8Array); } catch (e) {}
        if ((Uint8Array >>> Uint8Array) > 268435439) {
            const o12 = {
            };
            o12.h = -128;
            const o13 = {
            };
            o13.h = -128;
            o13.a = C1;
            const o14 = {
            };
            Symbol.unscopables;
            [a4,268435439,v0];
            const o18 = {
            };
        }
        return a5;
    }
    f3();
`;
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
const v31 = eval(v2);
v31.next(v31, eval, v2, C1, v2);
gc();
