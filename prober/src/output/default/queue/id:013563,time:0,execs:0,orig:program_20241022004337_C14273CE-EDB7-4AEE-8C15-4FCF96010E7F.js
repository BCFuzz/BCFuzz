let v1 = new Uint16Array();
let v2 = "object";
let v4 = `
    [v2,v4,,v1] = "undefined";
`;
eval(v4);
gc();
