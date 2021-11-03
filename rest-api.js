async function asyncFunction(value = '1') {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log('res : ', res);
}

asyncFunction(1);

const getUsers = () => {
  axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      const users = response.data.data;
      console.log(`GET users`, users);
    })
    .catch((error) => console.error(error));
};
getUsers();
