import "./App.css";

export default function Yj() {
  return(
    <div className = "Yj">
      <Raj name="ajith" pic="https://i.pinimg.com/736x/7c/e1/4d/7ce14d70e3166362e738f10af644b59f.jpg" />
      <Raj name="rajini" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PHu-Agwt0XmJ4UrG6a9CyGOQnbLGVuMzRhE5lSDx&s"/>
      <Raj name="vijay" pic="https://i.pinimg.com/736x/e4/ac/ff/e4acffae14795389e4dd1fe9614fa3f8.jpg"/>
    </div>
  )
  }
  function Raj({name, pic}){
    return(
      
      <div>
        <img className="ak" src={pic} alt={name}/>
        <h1>Hello, <span className="nm">{name}</span><span className="emoj"> ❤❤❤💥</span></h1>
      </div>
    )
  }