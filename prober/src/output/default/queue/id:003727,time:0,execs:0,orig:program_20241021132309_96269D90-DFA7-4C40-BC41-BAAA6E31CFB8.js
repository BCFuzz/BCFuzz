const v0 = `
    function f2() {
        return undefined;
    }
    const v3 = [-1.5440788565641554e+308,8.392061377465922,183811.76264407672,4.0,6.920196613326288e+307,336.91713815081516,1000000000.0,-556.165158207541];
    function f4(a5, a6, a7, a8) {
        a6.constructor.fromAsync(v3);
    }
`;
eval(v0);
gc();
