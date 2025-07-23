const v2 = `
    if (!("repeat" < "toString")) {
        const v4 = v2.toWellFormed;
        v4(v4, v2);
        try { v4.apply(); } catch (e) {}
        function f7() {
            return v2;
        }
    }
`;
eval(v2);
gc();
