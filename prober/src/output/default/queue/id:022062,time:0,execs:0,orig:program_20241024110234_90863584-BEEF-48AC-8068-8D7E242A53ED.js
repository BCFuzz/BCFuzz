const v0 = `
    const v1 = [-128,9,1073741824,-317583325,512,65535,12,64,51170];
    createGlobalObject().EvalError.captureStackTrace(v1);
`;
eval(v0);
gc();
