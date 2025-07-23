const v1 = `
    const v2 = typeof -534417929n;
    "5dn" !== "5dn" ? "5dn" : "5dn";
    v2 === "function";
`;
eval(v1);
gc();
