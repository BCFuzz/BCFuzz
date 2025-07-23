function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { RegExp.call(a5, ...RegExp); } catch (e) {}
}
new F3();
gc();
