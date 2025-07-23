const v2 = `
    if (!(1073741825 <= "toString")) {
        const v4 = v2.toWellFormed;
        try { v4(v4, v2); } catch (e) {}
        try { v4.apply(); } catch (e) {}
        function f7() {
        }
    }
`;
eval(v2);
gc();
