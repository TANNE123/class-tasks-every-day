export const Items = () => {
    const AllObj = [];
    for (let i = 1; i <= 20; i++) {
      const Obj = { id: i, name: "raju", role: "Python Developer" };
      AllObj.push(Obj);
    }
    localStorage.setItem("details",JSON.stringify(AllObj))
  };
  Items();