const v1 = new Uint32Array();
const v3 = `
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F4(Uint16Array, F4, F4, F4);
    const o11 = {
    };
    const v12 = /\u{12345}/myvis;
    function f13(a14, a15) {
        const v16 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
        const v17 = a14.exec;
        function f18(a19, a20, a21, a22) {
            const v23 = v10(a22, a19, Uint32Array, a19, v12);
            [Uint32Array,Reflect,v17,v16];
            Reflect.construct(F4);
            v23.sign(o11, a22, v1, Uint16Array);
            return Reflect;
        }
        return a15;
    }
`;
eval(v3);
gc();
