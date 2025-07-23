class C0 {
    #h;
}
for (let v1 = 0; v1 < 43; v1++) {
    const v2 = new C0();
    const v3 = v2.constructor;
    new v3(C0, v3, C0, v3, v3);
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    ReferenceError.stackTraceLimit = ReferenceError;
    ReferenceError();
}
new F5(F5, F5, C0, C0);
gc();
