export class Board{
  
    constructor(field,width){
        this.field=field
        this.width=width
    }

create(){
    const BODY =document.querySelector('body')
    BODY.style.display='flex'
    BODY.style.justifyContent='center'
    BODY.style.alignItems='center'
    BODY.style.height=`100vh`
    BODY.style.backgroundColor='#007fff'
    const container=document.createElement('div')
    container.style.width=`${this.width*Math.sqrt(this.field,2)}rem`
    container.style.height=`${this.width*Math.sqrt(this.field,2)}rem`
    container.style.display='flex'
    
    container.style.flexWrap='wrap'
    BODY.append(container)
    for(let i=0;i<this.field;i++){
    const div=document.createElement('div')
    div.setAttribute('class','field')
    div.style.width=`${this.width}rem`
    div.style.height=`${this.width}rem`
    div.style.boxShadow=`2px 5px 6px 0px rgba(0,0,0,0.3)`
    div.style.fontSize=`${this.width}rem`
    div.style.fontFamily=`Verdana, Geneva, Tahoma, sans-serif`
    div.style.display='flex'
    div.style.justifyContent='center'
    div.style.alignItems='center'
    container.append(div)
    
    }
    return BODY
}
}

