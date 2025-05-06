import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface AcceptINviteDialogProps{
onSubmit?:()=>void;
onCancle?:()=>void;
}
const AcceptINviteDialog:React.FC<AcceptINviteDialogProps>=({onSubmit,onCancle})=>{
return (
        <Card className="p-3 bg-black text-white">
              <CardHeader className="">
                  <CardTitle className="text-4xl font-semibold mb-4">Accept Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc mb-2">
                        <li className="mb-2">Make sure the role matches your skills, interests, and availability before accepting.</li>
                        <li >Make sure the role matches your skills, interests, and availability before accepting.</li>
                </ul>
                <Checkbox className="text-yellow-500 bg-black border-yellow-500 " /> <span>I understand Plugin policies</span> 
              </CardContent>

              <CardFooter className="flex justify-end">
                <div className="flex gap-6">
                        <p className="text-yellow-500 cursor-pointer font-semibold" onClick={onCancle}>Cancle</p>
                        <Button className="bg-yellow-500 hover:border hover:border-yellow-500"onClick={onSubmit} >Accept</Button>
                </div>
                </CardFooter>
        </Card>
);
}

export default AcceptINviteDialog;