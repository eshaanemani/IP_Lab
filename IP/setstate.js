export default class Home extends 
React.Component
{
constructor()
{
super();
this.state={
name:'Nikhil',
email:'nikhil@test.com',
count:0
}
}
Updatestate()
{
this.setState({
name:'Rupali',
count:this.state.count+1
})
}

render()
{
return(
<div>
<h1>Hello{this.state.count}</h1>
<h3>Email:{this.state.email}</h3>
<button 
onClick={()=>{this.Updatestate()}}>Update 
State</button>
</div>
)
}
}
