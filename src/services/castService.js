import Cast from "../model/Cast.js";

///////////////////////
/////////// GET Cast 
/////////////////////////

const createCast = cast => Cast.create(cast);
const getAllCasts = async() => {
    await Cast.find();
}


export default  {
    createCast,
    getAllCasts
}