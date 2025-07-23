-23272n;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    this.toUTCString = a5;
}
const v8 = new F3(14n);
v8.toUTCString = 14n;
new F3();
10 == 0;
new F3(10);
[1e-15,-272510.38114969607,1.0,-1.7976931348623157e+308,-2.220446049250313e-16,-1.7370895654339983e+308];
gc();
