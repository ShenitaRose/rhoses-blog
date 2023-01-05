import data from "../data";

export default function Handler(req,res){
    const{Posts} = data;
    if(Posts) return res.status(200).json(Posts)
    return res.status(404).json({error:"Data Not Found"})
}