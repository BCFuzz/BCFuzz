const v0 = [-4.0739850731563395e+307,979574.0719819597,1000000.0,5.0,2.0,-3.0,-9.323140870067558,7.185736617815184];
function f1(a2, a3, a4) {
    return a3;
}
let v5 = [v0];
const o7 = {
    get f() {
        return v0;
    },
};
for (const v8 in o7) {
    class C9 {
        constructor(a11) {
            const v13 = `
                const o17 = {
                    toString(a15, a16) {
                        ({"a":f1,"length":v5,} = v0);
                        return a15;
                    },
                };
                /\u{12345}/myvis;
            `;
            const v19 = v13.split(a11);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C9(v8);
}
gc();
