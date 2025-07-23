function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    JSON.stringify(("-789426228").constructor.fromCharCode(1000.0));
}
new F1(F1);
gc();
