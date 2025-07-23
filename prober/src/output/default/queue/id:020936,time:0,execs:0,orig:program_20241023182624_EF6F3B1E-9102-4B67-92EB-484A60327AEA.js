const v0 = `
    /\ud808\udf45*(?:a{5,1000000}){3,1000000}/mdsu;
`;
const v3 = eval(v0);
v3.exec(v3);
gc();
