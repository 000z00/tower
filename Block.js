class Block extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
  
  }
  display(){
    if((this.body.speed)<4)
  {super.display();
  }else
  {
World.remove(world,this.body)  
  }
}
}
