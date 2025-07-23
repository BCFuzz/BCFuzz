gc();
const v2 = `
    /^foo|(bar|baz)|quux+/dvs;
`;
eval(v2);
gc();
