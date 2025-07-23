let v0 = [];
let v1 = 8;
const v3 = `
    function f4(a5, a6, a7) {
        [v1,f4,...v0] = "object";
        eval();
        return f4;
    }
    f4.call(v1);
`;
eval(v3);
gc();
