const user_permission = {
  employee: {
    read: ["specialist_notes", "is_exempt"],
    write: ["specialist_notes", "is_exempt"]
  },
  organization: {
    read: ["specialist_notes", "date_of_birth"],
    write: ["work_email", "is_exempt"]
  }
}


  const build = (roles, params) => {
    if (user_permission[roles]) {
      const write_rules = user_permission[roles]['write'];

      write_rules.forEach(rule => {
        delete params[rule]
        console.log(params, "params")
      })
    }
    store.push({2: params});
  }

  const get = (roles) => {
    // get all users
    let users = localStorage.get('users');
    if (user_permission[roles]) {
      const read_rules = user_permission[roles]['read'];

      users.forEach(user => {
        read_rules.forEach(rule => {
          user.delete(rule)
        })
      })
    }

    return users;
  }


const store = [
  {id: 1, name: 'kirk', dob: 'october 27', email: 'kkchu@gmail.com', is_exempt: true, specialist_notes: 'notes' }
]

build('employee', {name: 'kirk', is_exempt: true})

console.log(store)