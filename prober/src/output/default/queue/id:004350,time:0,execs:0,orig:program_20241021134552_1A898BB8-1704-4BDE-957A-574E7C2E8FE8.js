const v2 = new Proxy([1073741824,-26526], Proxy);
v2.fill();
gc();
