localStorage.setItem('name','bob')
console.log(localStorage.getItem('name'))

sessionStorage.setItem('name','dp')
console.log(localStorage.getItem('name'))

// cookies are complex to work with and the only way to interact with them is via document object
document.cookie='name=devendra; expires='+new Date(2023, 1, 1).toUTCString()
document.cookie='lastname=prasad; expires='+new Date(2023, 1, 1).toUTCString()
// to view cookie, there is no direct way
// all cookie will be viewed at once
console.log(document.cookie)