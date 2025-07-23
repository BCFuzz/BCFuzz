const v3 = `
    const t1 = "9";
    t1.length *= -9;
    /\u{12345}/myvis;
    class C5 {
        1647 = -4.0;
    }
`;
eval(v3);
gc();
