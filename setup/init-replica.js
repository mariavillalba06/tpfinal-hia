rs.initiate({_id: "rs-lab-01", members: [{ _id: 0, host: "mongo-primary:27017" },{ _id: 1, host: "mongo-secondary:27017" }]});

printjson(rs.status());