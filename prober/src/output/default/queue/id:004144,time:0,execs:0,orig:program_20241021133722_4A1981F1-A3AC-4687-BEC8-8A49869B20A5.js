for (let v1 = 0; v1 < 4; v1++) {
    Math.log(1000.0);
    Math.log1p(!1000.0);
}
new Int16Array(5);
[2.2250738585072014e-308,1.0,417745.02169891377,-2.2250738585072014e-308,1000000000000.0,1000000.0,1.7976931348623157e+308,-1000.0];
const v10 = [1000.0,2.2250738585072014e-308,3.0,-1.0,0.0,2.0];
const v13 = new Int16Array(2290);
for (const v14 of v13) {
}
const v15 = `
    for (let v16 = 0; v16 < 5; v16++) {
        function F17() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F17();
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v24 = new F20();
        try { v24.hasOwnProperty(5); } catch (e) {}
        for (let v26 = 0; v26 < 5; v26++) {
            class C29 {
                #d = 10n;
            }
            C29[10] = C29;
            const v30 = new C29();
            v30.hasOwnProperty();
            v30.constructor;
        }
        for (let v33 = 0; v33 < 5; v33++) {
        }
    }
    let v34 = 61104;
    let v36;
    try {
    const t0 = 4294967296;
    v36 = t0(...v10);
    } catch (e) {}
    function f37() {
        return v36;
    }
    -(++v34);
`;
eval(v15);
gc();
