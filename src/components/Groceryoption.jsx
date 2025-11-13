
export default function Groceryoption({GroceryData}){
    //using props sent whole obj
    return(
        
        <div className="  rounded-4xl">
            <div className="h-35 w-30 m-5 bg-amber-100 rounded-4xl"><img className="  object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+GroceryData.imageId} alt="image hai" /></div>
           
            <h1 className="text-center">{GroceryData?.action?.text} </h1>

        </div>
    )
}