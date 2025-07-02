import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "./Input";

interface ModalProps {
    open: boolean,
    onClose: ()=>void
}
export function AddContentModal({open,onClose}:ModalProps)
{
    return (<div className=" opacity-60 ">
        {
            open && <div className="bg-slate-300 w-screen h-screen fixed left-0 top-0 flex justify-center">
                <div className="flex flex-col justify-center ">
                    <div className="bg-white p-4 rounded-md"> 
                        <div className="flex justify-end ">
                            <div className="cursor-pointer"  onClick={onClose}>
                                <CloseIcon />
                            </div>
                        </div>
                        <div className="flex flex-col mt-4">
                            <Input placeholder={"title"} onChange={()=> {}}/>
                            <Input  placeholder={"link"} onChange={()=> {}}/>
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button variant="primary" size="lg" onClick={()=>{}} text="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>)
}


