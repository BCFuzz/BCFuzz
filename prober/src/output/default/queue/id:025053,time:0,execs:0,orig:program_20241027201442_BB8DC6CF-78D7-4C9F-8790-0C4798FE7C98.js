const v1 = `
    class C2 {
    }
    let v3 = -923097.7695206304 >> C2;
    v3 = +v3;
`;
eval(v1);
gc();
