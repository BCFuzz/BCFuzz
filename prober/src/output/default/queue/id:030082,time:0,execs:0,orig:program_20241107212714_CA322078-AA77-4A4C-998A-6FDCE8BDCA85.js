const v2 = `
    -9223372036854775808 / -1000000000.0;
    /\u{12345}/myvis;
`;
v2.split().flatMap(parseInt);
gc();
