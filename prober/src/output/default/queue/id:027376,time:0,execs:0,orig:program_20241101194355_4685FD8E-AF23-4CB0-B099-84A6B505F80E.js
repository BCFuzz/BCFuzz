const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    /\ud808\udf45*[\cA]/mis.test(undefined);
}
gc();
