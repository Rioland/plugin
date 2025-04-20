import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface WorkSmartProps{
onSubmit?:()=>void;
onCancle?:()=>void;
}
const WorkSmart:React.FC<WorkSmartProps>=({onSubmit,onCancle})=>{
return (
        <Card className="p-3 bg-black text-white">
              <CardHeader className="">
                  <CardTitle className="text-4xl font-semibold mb-4">Work smart and earn trust</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc mb-2">
                        <li className="mb-2">Only accept payment through Plugin, ensuring payment protection</li>
                        <li >Getting paid outside Plugin breaks our terms and may lead to account suspension or legal consequences.</li>
                </ul>
                <Checkbox className="text-yellow-500 bg-black border-yellow-500 " /> <span>I understand Plugin policies</span> 
              </CardContent>

              <CardFooter className="flex justify-end">
                <div className="flex gap-6">
                        <p className="text-yellow-500 cursor-pointer font-semibold" onClick={onCancle}>Cancle</p>
                        <Button className="bg-yellow-500 hover:border hover:border-yellow-500"onClick={onSubmit} >Submit Proposal</Button>
                </div>
                </CardFooter>
        </Card>
);
}

export default WorkSmart;