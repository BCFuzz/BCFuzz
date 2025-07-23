const v0 = [0.8935334988221727,-0.6279152945948496,224.70501093981102,1000.0,-1000000.0];
const v1 = [0.8709760128654206,2.0];
function f4(a5, a6, a7, a8) {
    const o22 = {
        valueOf(a10, a11) {
            const v12 = [13,8,3,-1447235540,8,5];
            function f15() {
                const v16 = --f15;
                return 4294967296 - (((v12 % v16) << -65536) & v16);
            }
            a7.reduce(f15);
            return f4;
        },
        ...a6,
    };
    return o22;
}
const v23 = f4("f", v0, v0);
class C24 {
}
const v25 = v1 + C24;
for (let v26 = 0; v26 < 100; v26++) {
    f4(v25, v23) != "-2074917049";
}
gc();
