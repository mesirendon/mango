let res = [
  db.createUser({
    user: 'mesi',
    pwd: 'mesi',
    roles: [
      {role: 'dbOwner', db: 'tierras'}
    ]
  }),
  db.createCollection('landOwner'),
  db.createCollection('userCollection')
]
