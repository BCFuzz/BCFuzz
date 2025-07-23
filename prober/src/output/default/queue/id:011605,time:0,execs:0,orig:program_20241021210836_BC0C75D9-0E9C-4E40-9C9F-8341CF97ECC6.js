const v0 = `
    const v1 = /\u{12345}/myvis;
    const v2 = v1.__proto__;
    new Uint8ClampedArray(v1, v2, v2);
    765 & v2;
`;
eval(v0);
gc();
