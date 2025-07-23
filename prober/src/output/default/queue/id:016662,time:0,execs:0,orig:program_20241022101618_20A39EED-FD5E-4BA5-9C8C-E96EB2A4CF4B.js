function f1() {
    return f1;
}
const v3 = new Proxy(f1, Reflect);
v3.__proto__ = [-572867068,-935637352];
const o6 = {
};
const v7 = new Proxy(this, o6);
v7.__proto__;
gc();
