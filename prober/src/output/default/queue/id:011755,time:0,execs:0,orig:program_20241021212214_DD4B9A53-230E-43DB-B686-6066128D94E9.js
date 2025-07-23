const v0 = [-15,-65194,2147483647,1088892929,-2094145298,1163902097,4,-2147483649,11];
const o1 = {
};
const v3 = new Proxy(v0, o1);
for (let v4 = 0; v4 < 5; v4++) {
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        delete v3.b;
    }
    new F5();
}
gc();
