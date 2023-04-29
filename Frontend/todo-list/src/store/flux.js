const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        username: "",
        email: "",
        password: "",
      },
      user_id:"",
      token: "",
      newTask: {
        task:""
      },
      tasks: [],
    },
    actions: {
      handleChange: (e) => {
        let { user } = getStore();
        setStore({
          user: {
            ...user,
            [e.target.name]: e.target.value,
          },
        });
      },
      /* eslint-disable no-restricted-globals */
      handleUserRegister: (e, navigate) => {
        e.preventDefault();
        const { user } = getStore();
        fetch("http://localhost:8080/users", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              user: {
                username: "",
                email: "",
                password: "",
              },
            });
            console.log(data);
            alert(JSON.stringify(data));
            navigate("/login");
          })
          .catch((error) => {
            alert(error.message);
            console.log(error);
          });
      },
      handleUserLogin: (e, navigate) => {
        e.preventDefault();
        const { user } = getStore();
        fetch("http://localhost:8080/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(user),
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else if (res.status === 400) {
              throw new Error("Usuario o contraseña incorrectos");
            }
          })
          .then((data) => {
            console.log(data);
            setStore({
              token: data.token,
              user_id: data.user_id,
              user: {
                username: "",
                email: "",
                password: "",
              },
            });
            console.log(data);
            getActions().fetchUserData(data.user_id, data.token);
            getActions().getTasks(data.user_id, data.token);
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
            console.log(error);
          });
      },
      fetchUserData: (user_id, token) => {
        fetch(`http://localhost:8080/users/${user_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              user: {
                username: data.username,
                email: data.email,
                password: "",
              },
            });
          })
          .catch((error) => console.log(error));
      },
      handleChangeTask: (e) => {
        let { newTask } = getStore();
        setStore({
          newTask: {
            ...newTask,
            [e.target.name]: e.target.value,
          },
        });
      },
      handleNewTask: (e, navigate) => {
        e.preventDefault();
        const { user_id, newTask } = getStore();
        const task = {...newTask, user_id}
        fetch("http://localhost:8080/tasks", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              newTask: {
                task:""
              },
            });
            console.log(data);
            alert(JSON.stringify(data));
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
            console.log(error);
          });
      },
      getTasks: (user_id, token) => {
        fetch(`http://localhost:8080/tasks/${user_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({
              tasks: data,
            });
          })
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
