const v1 = `
    let v3;
    try { v3 = ("boolean").padEnd(); } catch (e) {}
    if (!(4 <= v3)) {
    }
    function f5(a6, a7) {
        a7.length;
        return "boolean";
    }
    try { f5.apply(); } catch (e) {}
`;
eval(v1);
gc();
