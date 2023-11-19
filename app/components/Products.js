
const ProductsList = [
    {
        "id":1,
        "name":"name1",
        "image":"/plant11.jpg",
        "description":"description description description description description description",
        "price":"500DH"
    },
    {
        "id":2,
        "name":"name1",
        "image":"/plant14.jpg",
        "description":"description description description description description description",
        "price":"500DH"
    },
    {
        "id":3,
        "name":"name1",
        "image":"/plant122.webp",
        "description":"description description description description description description",
        "price":"500DH"
    },
    {
        "id":4,
        "name":"name1",
        "image":"/plant15.avif",
        "description":"description description description description description description",
        "price":"500DH"
    },
    {
        "id":5,
        "name":"name1",
        "image":"/plant121.jpg",
        "description":"description description description description description description",
        "price":"500DH"
    },
]

export default function MyProducts(){
    return (
    <div id="products" className="flex flex-col md:grid grid-cols-3 grid-flow-row gap-2 md:max-w-7xl mb-10"> 

        {(ProductsList && ProductsList.length != 0) 
        && ProductsList.map((product)=>{
            return RenderProduct(product)
        })}

    </div>)
}

function RenderProduct(product){
    return (
        <div key={product.id} className="overflow-hidden group rounded-[30px] shadow-lg text-center max-w-[320px]">
            <div className="group-hover:scale-125 transition ease-in-out duration-300">
                <img src={product.image} className="w-full h-80" alt="" />
            </div>
            <div className="absolute hidden group-hover:block group-hover:animate-appear rounded-[30px]  p-8 text-center w-[320px] h-[320px] bg-green-400  bg-opacity-30 -translate-y-[320px]">
                <p className="">{product.description}</p>
                <p>{"price: "+product.price}</p>
            </div>
        </div>
    )
}