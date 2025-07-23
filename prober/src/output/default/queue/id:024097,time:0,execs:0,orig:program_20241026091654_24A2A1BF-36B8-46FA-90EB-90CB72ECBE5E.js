for (let i = 0; i < 100; i++) {
    const v2 = URIError(URIError).__proto__;
    v2.__defineGetter__(v2, URIError);
}
gc();
