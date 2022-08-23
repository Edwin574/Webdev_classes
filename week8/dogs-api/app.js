
const myImage = document.getElementById('image')
const myButton = document.getElementById("mybutton")




const getImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((result) => {
            console.log(result)
            return result.json()
        })
        .then((data) => {
            console.log(data)
            myImage.src = data.message
        })
        .catch((error) => {
            console.log(error)
        })

}
getImage()

myButton.addEventListener('click', function () {

    getImage()

})
