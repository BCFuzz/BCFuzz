const o0 = {
};
let v1 = "getPrototypeOf";
const v2 = `
    o0.e;
    [/\u{12345}/myvis,...v1];
`;
v1 = v2;
eval(v2);
gc();
