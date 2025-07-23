Promise.then = SyntaxError;
const t1 = Promise.withResolvers().resolve;
t1(Promise);
gc();
