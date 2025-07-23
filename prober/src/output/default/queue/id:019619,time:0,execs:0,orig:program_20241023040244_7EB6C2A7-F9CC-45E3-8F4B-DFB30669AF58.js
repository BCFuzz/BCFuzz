const v1 = `
    let v3;
    try { v3 = ("boolean").padEnd(v1, "P"); } catch (e) {}
    if (!("P" <= v3)) {
    }
    function f5(a6, a7) {
        return "boolean";
    }
    f5.apply(f5, f5);
`;
eval(v1);
gc();
