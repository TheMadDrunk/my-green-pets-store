



export default function MyContact(){
    return (
        <div id="contact" className="flex flex-col w-full px-2 md:max-w-6xl">
            <div className="my-2 px-2 flex flex-row justify-between w-full rounded-lg items-center border-2 border-green-800 ">
                <div className="flex flex-row items-center">
                    <img src="/phone.png" className="h-8 m-1 mx-2" alt="numero"/>
                    <p className="font-bold">Contact:</p>
                </div>
                <p>0666-8xxxx1</p>
            </div>
            <div className="my-2 flex flex-row justify-between px-2 w-full rounded-lg items-center border-2 border-green-800">
                <div className="flex flex-row items-center">
                    <img src="/email.png" className="h-8 m-1 mx-2" alt="Adresse Email"/>  
                    <p className="font-bold">Adresse Email</p>
                </div>
                <p>contact@mygreenpets.ma</p>
            </div>
            <div className="my-2 flex flex-row justify-between px-2 w-full rounded-lg items-center border-2 border-green-800">
                <div className="flex flex-row items-center">
                    <img src="/map.png" className="h-8 m-1 mx-2" alt="Notre emplacement"/>  
                    <p className="font-bold">Notre emplacement</p>
                </div>
                <p>2 AVENUE MOULAY YOUSSEF IMM D APP 5 RDC , Rabat</p>
            </div>
            
        </div>
    )
}