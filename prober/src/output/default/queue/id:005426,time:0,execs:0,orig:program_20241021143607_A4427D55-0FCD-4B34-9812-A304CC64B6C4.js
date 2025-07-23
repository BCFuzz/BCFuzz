const v0 = [-14,-50,-14,127,-4457,-5,12896,1024,2134146327,8];
const v1 = `
    class C3 extends Date {
    }
    const v4 = new C3();
    const v6 = v4["toISOString"]();
    function f7(a8, a9, a10, a11) {
        return v0;
    }
    f7(f7(v4, v0, "toISOString", v0), v0, v6);
`;
eval(v1);
gc();
