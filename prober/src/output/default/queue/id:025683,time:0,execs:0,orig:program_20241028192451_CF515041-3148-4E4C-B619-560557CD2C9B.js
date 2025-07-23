class C0 {
}
let v4 = new BigUint64Array(586);
for (let v5 of v4) {
    const o6 = {
    };
    const v7 = [-1000000.0,-1.3627035914914707e+308,-2.220446049250313e-16,0.3341757671040231,-1.0818939815292406e+307,NaN];
    const o8 = {
        __proto__: v7,
    };
    function f9() {
        let v10 = arguments;
        ({"b":v4,"e":C0,"f":v10,...v5} = o6);
        o8[Proxy] /= v10;
        return v10;
    }
    f9();
}
gc();
