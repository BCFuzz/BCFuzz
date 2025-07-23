for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = [-15,-65194,2147483647,1088892929,-2094145298,1163902097,4,-2147483649,11];
const o11 = {
};
const v13 = new Proxy(v10, o11);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    const v16 = this.constructor;
    try { new v16(); } catch (e) {}
    delete v13.b;
}
new F14();
gc();
