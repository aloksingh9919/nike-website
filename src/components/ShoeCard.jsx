const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImage}) => {
const handleClick=()=>{
  setInterval(() => {
    if(bigShoeImage!== imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
  }
  }, 3000);
      
        // console.log(handleClick)
    
}

  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe? 'border-violet-700':'border-tranparent'} cusror-pointer max-sm:flex-1`} 
    onClick={handleClick}>

        <div className="flex justijy-center items-center bg-violet-200 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail}
             alt="shoe colloction"
             width={127}
             height={103} 
             className="object-contain"/>
        </div>
         
    </div>
  )
}

export default ShoeCard