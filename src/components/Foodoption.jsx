export default function Foodoption({link}){
    //{link} is destructed so dont need to use by {props.link}
    return(

        <div className="h-26 w-35">
          <img src={link}  />
        </div>

    )

}
//image k andar hi naam likha h khane ka