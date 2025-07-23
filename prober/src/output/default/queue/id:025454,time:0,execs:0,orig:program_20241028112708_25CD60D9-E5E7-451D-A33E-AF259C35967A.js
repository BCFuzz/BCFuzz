const v2 = new Uint8Array(Symbol, Uint8Array, Symbol);
v2[Symbol.toPrimitive] = Symbol;
for (let i = 0; i < 100; i++) {
    const v6 = URIError().__proto__;
    v6.__defineGetter__(v2, URIError);
    const v9 = ([-536870912,536870889,-9007199254740992,25841,10000]).map;
    try { v9.apply(v6); } catch (e) {}
}
gc();
