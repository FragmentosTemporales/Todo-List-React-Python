const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      task: "",
      tasks: []
    },
    actions: {
      handleChange: (e) => {
        console.log(e.target.value)
        let { task, tasks } = getStore()
        setStore({
          task: e.target.value,
          tasks: [task, ...tasks],
        })
      }
    },
  };
};

export default getState;