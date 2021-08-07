const whosOnline = (friends) => {
  let res = { online: [], offline: [], away: [] };
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online") {
      if (friends[i].lastActivity > 10) {
        res.away.push(friends[i].username);
      } else {
        res.online.push(friends[i].username);
      }
    }
    if (friends[i].status === "offline") {
      res.offline.push(friends[i].username);
    }
  }
  if (res.online.length < 1) {
    delete res.online;
  }
  if (res.offline.length < 1 && res.away.length < 1) {
    return (res = {});
  }
  return res;
};

whosOnline([
  {
    username: "David",
    status: "online",
    lastActivity: 100,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
]);
