const o0 = {
};
const v2 = [-2.0,-2.0];
const v4 = `
    for (let v5 = 0; v5 < 5; v5++) {
        const v8 = ("p" + v5).codePointAt;
        for (let i10 = 0; i10 < 21768; i10++) {
        }
        o0["growable"] /= -2.0;
        v8.call(v2, -4.0);
    }
    [462505212n];
    class C20 {
    }
    class C21 extends C20 {
    }
`;
eval(v4);
gc();
