export default function handleError (error) {
    //console.log(error);
    if (!error.message) throw new Error("Error object not detected.")
    alert(error.message)
}