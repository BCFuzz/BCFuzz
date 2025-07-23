const o0 = {
};
for (let v1 = 0; v1 < 100; v1++) {
    const v2 = o0.__proto__;
    function f3(a4) {
        return a4;
    }
    Object.defineProperty(v2, "e", { configurable: true, enumerable: true, set: f3 });
}
const v5 = [-9007199254740992,-2147483648,9131];
const o6 = {
};
const v8 = new Proxy(v5, o6);
v8.reverse();
gc();
