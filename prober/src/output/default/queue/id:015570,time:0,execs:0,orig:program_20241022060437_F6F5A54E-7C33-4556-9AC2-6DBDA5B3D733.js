function f0() {
    const o3 = {
        255: 536870889,
        [536870889]: -2147483649,
    };
    return o3;
}
const v4 = f0();
const v5 = [v4,v4,v4];
const v6 = [v4];
function f9(a10, a11, a12, a13) {
    try { a13.forEach(f9); } catch (e) {}
    const o24 = {
        o(a16, a17, a18) {
            const v19 = a18.o;
            try { v19(v4, v4, -1316173556n); } catch (e) {}
            class C21 extends f0 {
                44;
            }
            new C21();
            new C21();
            return a13;
        },
    };
    return o24.o(a10, a11, o24);
}
f9();
f9(v5, 4568n, v6, v6);
gc();
