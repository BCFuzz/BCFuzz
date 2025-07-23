const v0 = `
    /[\xf0\x9f\x92\xa9-\xf4\x8f\xbf\xbf]\u{12345}\u{23456}?/myvgs;
`;
eval(v0);
gc();
