function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = URIError(URIError).__proto__;
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    for (let v8 = 0; v8 < 5; v8++) {
        v7.__proto__ = this;
        v4 < v8;
    }
    for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
    }
}
new F0();
gc();
