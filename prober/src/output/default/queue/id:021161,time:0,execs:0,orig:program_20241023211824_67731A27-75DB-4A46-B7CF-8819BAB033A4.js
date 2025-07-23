for (let i = 0; i < 10; i++) {
    function f0(a1, a2) {
        function f3(a4, a5) {
            return f0;
        }
        function f6(a7, a8) {
            const t6 = createGlobalObject().Float16Array;
            const v12 = new t6();
            v12.a;
        }
        f3[Symbol.toPrimitive] = f6;
        f3.hasOwnProperty(f3);
    }
    const v17 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
    const v18 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
    v18[Symbol.toPrimitive] = f0;
    const o21 = {
        [v18]: v17,
    };
}
gc();
