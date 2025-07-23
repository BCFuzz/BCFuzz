const v0 = /J(?<a>(?<b>(?<c>(?<d>.).).).)a||bc/dyis;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    v0.exec();
}
new F1();
gc();
