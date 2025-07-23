const v1 = `
    const v2 = typeof -534417929n;
    const v5 = "5dn" !== "5dn";
    v5 ? "5dn" : v5;
    v2 === "function";
`;
eval(v1);
gc();
