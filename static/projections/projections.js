let chosenState;
const search = () => {
    // document.getElementById("id name in html")
    //.value takes the user input
    const searchbox = document.getElementById("search-item").value.toUpperCase();
   
    const storeItems = [
        "OHIO", "CALIFORNIA"
    ];
    
    // storeitems represents the container holding all the product items
    //const product = document.querySelectorAll(".product");
    // product stores all the items with the class product
    //const pname = storeitems.getElementsByTagName("h2");
    // gets all the storeitems elements and pname holds all the h2 elements
    for (var i = 0; i < storeItems.length; i++) {
        // takes whatever iteration we are on's product and the name under h2 and [0] makes sure it's the first name element in case there are multiples
      
        if (storeItems[i] == searchbox) {
            chosenState = storeItems[i];
        
            // // checked if match has a value
            // let textvalue = match.textContent || match.innerHTML;
            // // match.textContent retrieves the text content of the h2 element stores in match
            // // if .textContent is not supported it falls on match.innerHTML
            // if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            //     // text content is made case insensitive and the searchbox value index in the text content is found if it exists it won't be -1
            //     product[i].style.display = "";
            //     // when set to an empty string, the product is displayed
            // } else {
            //     product[i].style.display = "none";
            // }
        }
    }
}

function change_projection(){

var project=document.getElementById("Projection");
project.innerHTML= "There is a chance of outtage 2 days out of 30 days in the area"
}




// <!-- Navigation -->
//         <div class="col-md-7" style="margin: 0%;padding: 0%;">
//             <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end" style="background-color: #0c0d0f !important" >
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                         <a class="nav-link" href="../home/shelter.html">HOME</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="../projections/projections.html">PROJECTIONS</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="../sheltermap/sheltermap.html">SHELTER</a>
//                     </li>
//                     <li class="nav-item active">
//                         <a class="nav-link" href="../tips/tips.html">TIPS</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//         <div class="col-md-3" style="padding-top: 1.3%; background-color:#0c0d0f;font-family: 'DM Sans'; color: white; width: 50%;">

//         <div style="background-color: white ;border-radius: 12px;color: blue;width: 50%; display:flex; justify-content: center;">SIGN OUT</div>
//       </div>


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Projections | Safepower</title>
//     <script src="projections.js"></script>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
//     <!-- <script src="navbar.js"></script> -->
//     <link rel="stylesheet" href="projections.css">
//     <style>
//         @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz@0,9..40;1,9..40&display=swap');
//     </style>
// </head>
// <body>
//     <div class="row" style="margin-left: 1%; overflow: hidden; z-index: 1; background-color: #062345">
//         <!-- Logo on the left-most corner -->  
//         <div class="col-md-2" style="position: relative; transform-origin: 0 0; margin-top: 1%">
//             <svg class="logo" width="219" height="86" viewBox="0 0 219 86" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1495 46.8184C25.0898 46.7615 25.0371 46.6973 24.9929 46.627C24.9041 46.4857 24.852 46.3244 24.8414 46.1578C24.8309 45.9912 24.8622 45.8247 24.9325 45.6733C25.0028 45.5219 25.1099 45.3906 25.244 45.2912L43.371 31.8527L40.1115 30.0233L55.9706 18.7734C56.1082 18.6759 56.2189 18.5451 56.2924 18.3933C56.3659 18.2415 56.3997 18.0735 56.3908 17.9051C56.3819 17.7366 56.3304 17.5732 56.2413 17.43C56.1522 17.2868 56.0283 17.1685 55.8812 17.086L41.9285 9.25519C41.7603 9.16076 41.5684 9.11699 41.3759 9.12915C41.1834 9.14132 40.9985 9.2089 40.8435 9.32375L15.3135 28.2505C15.1794 28.3499 15.0724 28.4812 15.002 28.6326C14.9317 28.784 14.9004 28.9505 14.911 29.1171C14.9215 29.2837 14.9736 29.445 15.0624 29.5863C15.1513 29.7275 15.2741 29.8443 15.4197 29.926L23.9301 34.7024L9.13666 51.3837C8.98634 51.5528 8.89783 51.7679 8.8856 51.9939C8.87336 52.2198 8.93813 52.4433 9.06931 52.6277C9.20049 52.812 9.39032 52.9465 9.6078 53.009C9.82527 53.0715 10.0575 53.0585 10.2666 52.9719L25.1495 46.8184Z" fill="white"/>
//                 <path d="M48.3017 45.3512L46.3685 46.7226L48.4355 47.8827L56.6238 52.4783L20.7551 67.3086L34.1105 52.249L35.3453 50.8565L33.7224 49.9456L25.8851 45.547L50.5347 27.2729L63.516 34.5586L48.3017 45.3512ZM25.2648 46.0069L25.265 46.0067L25.2648 46.0069ZM64.1608 34.1012L64.1606 34.1014L64.1608 34.1012Z" stroke="white" stroke-width="3"/>
//                 <path d="M66.1992 53.9453C64.9102 53.0469 64.2656 51.7773 64.2656 50.1367C64.2656 48.4961 64.9102 47.2363 66.1992 46.3574C67.498 45.4785 69.168 45.0391 71.209 45.0391H76.0576C76.0576 43.8965 75.8184 43.1006 75.3398 42.6514C74.8613 42.2021 74.0215 41.9775 72.8203 41.9775C71.6289 41.9775 70.7891 42.2754 70.3008 42.8711C69.8223 43.457 69.2314 43.75 68.5283 43.75H66.3457C66.082 43.75 65.8623 43.667 65.6865 43.501C65.5205 43.3252 65.4375 43.1104 65.4375 42.8564C65.4375 40.0537 68.0986 38.6523 73.4209 38.6523C75.7451 38.6523 77.6104 39.1748 79.0166 40.2197C80.4229 41.2549 81.126 42.8613 81.126 45.0391V54.1064C81.126 54.3701 81.043 54.585 80.877 54.751C80.7109 54.917 80.4961 55 80.2324 55H77.4053C77.1416 55 76.9268 54.917 76.7607 54.751C76.5947 54.5752 76.5117 54.3604 76.5117 54.1064V53.6523C74.9688 54.7559 73.1865 55.3027 71.165 55.293C69.1533 55.293 67.498 54.8438 66.1992 53.9453ZM71.5605 48.3643C70.877 48.3643 70.335 48.5303 69.9346 48.8623C69.5439 49.1943 69.3486 49.624 69.3486 50.1514C69.3486 50.6787 69.5537 51.1133 69.9639 51.4551C70.374 51.7969 70.9551 51.9678 71.707 51.9678C73.2109 51.9678 74.6611 51.5283 76.0576 50.6494V48.3643H71.5605ZM96.5068 37.4219L94.4854 37.1729C92.542 37.1729 91.2773 37.4365 90.6914 37.9639C90.1055 38.4814 89.8125 39.5605 89.8125 41.2012V41.4355H95.1152C95.3789 41.4355 95.5938 41.5234 95.7598 41.6992C95.9355 41.8652 96.0234 42.0801 96.0234 42.3438V44.0869C96.0234 44.3506 95.9355 44.5654 95.7598 44.7314C95.5938 44.8975 95.3789 44.9805 95.1152 44.9805H89.8125V54.1064C89.8125 54.3701 89.7246 54.585 89.5488 54.751C89.3828 54.917 89.1729 55 88.9189 55H85.6377C85.374 55 85.1592 54.917 84.9932 54.751C84.8271 54.585 84.7441 54.3701 84.7441 54.1064V41.2012C84.7441 38.4766 85.3643 36.5479 86.6045 35.415C87.8447 34.2725 90.0225 33.7012 93.1377 33.7012C94.7393 33.7012 95.8574 33.7598 96.4922 33.877C97.127 33.9941 97.5273 34.1406 97.6934 34.3164C97.8594 34.4824 97.9424 34.6777 97.9424 34.9023V36.5137C97.9424 36.7773 97.8545 36.9971 97.6787 37.1729C97.5127 37.3389 97.3027 37.4219 97.0488 37.4219H96.5068ZM100.359 53.1543C98.8555 51.7285 98.1035 49.6777 98.1035 47.002C98.1035 44.3164 98.8604 42.2559 100.374 40.8203C101.888 39.375 103.987 38.6523 106.673 38.6523C109.358 38.6523 111.453 39.3555 112.957 40.7617C114.461 42.1582 115.213 44.165 115.213 46.7822V47.6172C115.213 47.8809 115.125 48.1006 114.949 48.2764C114.783 48.4424 114.568 48.5254 114.305 48.5254H103.274C103.372 49.7266 103.714 50.6006 104.3 51.1475C104.896 51.6943 105.843 51.9678 107.142 51.9678C108.44 51.9678 109.329 51.6748 109.808 51.0889C110.286 50.5029 110.877 50.2051 111.58 50.1953H113.763C114.026 50.1953 114.241 50.2832 114.407 50.459C114.583 50.625 114.671 50.8398 114.671 51.1035C114.671 53.9062 112 55.3027 106.658 55.293C103.963 55.293 101.863 54.5801 100.359 53.1543ZM103.245 45.4346H110.057C109.959 43.1299 108.826 41.9775 106.658 41.9775C104.5 41.9775 103.362 43.1299 103.245 45.4346ZM117.908 59.043V39.8535C117.908 39.5898 117.991 39.375 118.157 39.209C118.333 39.0332 118.548 38.9453 118.802 38.9453H121.629C121.883 38.9453 122.093 39.0332 122.259 39.209C122.435 39.375 122.522 39.5898 122.522 39.8535V40.293C124.065 39.1992 125.857 38.6523 127.898 38.6523C129.939 38.6523 131.644 39.375 133.011 40.8203C134.378 42.2559 135.062 44.3164 135.062 47.002C135.062 49.6777 134.354 51.7285 132.938 53.1543C131.521 54.5801 129.612 55.293 127.21 55.293C125.97 55.293 124.559 55.0439 122.977 54.5459V59.043C122.977 59.3066 122.889 59.5215 122.713 59.6875C122.547 59.8633 122.337 59.9512 122.083 59.9512H118.802C118.548 59.9512 118.333 59.8633 118.157 59.6875C117.991 59.5215 117.908 59.3066 117.908 59.043ZM122.977 51.1621C124.236 51.5625 125.296 51.7627 126.155 51.7627C127.493 51.7627 128.44 51.3818 128.997 50.6201C129.563 49.8584 129.847 48.6426 129.847 46.9727C129.847 45.3027 129.578 44.0918 129.041 43.3398C128.514 42.5781 127.718 42.1973 126.653 42.1973C125.599 42.1973 124.373 42.6367 122.977 43.5156V51.1621ZM139.148 53.1836C137.625 51.7773 136.863 49.707 136.863 46.9727C136.863 44.2285 137.625 42.1582 139.148 40.7617C140.672 39.3555 142.859 38.6523 145.711 38.6523C148.572 38.6523 150.765 39.3555 152.288 40.7617C153.812 42.1582 154.573 44.2285 154.573 46.9727C154.573 49.707 153.812 51.7773 152.288 53.1836C150.765 54.5898 148.572 55.293 145.711 55.293C142.859 55.293 140.672 54.5898 139.148 53.1836ZM142.854 43.1641C142.249 43.9551 141.946 45.2197 141.946 46.958C141.946 48.6963 142.249 49.9658 142.854 50.7666C143.46 51.5674 144.412 51.9678 145.711 51.9678C147.02 51.9678 147.977 51.5674 148.582 50.7666C149.197 49.9658 149.505 48.6963 149.505 46.958C149.505 45.2197 149.197 43.9551 148.582 43.1641C147.977 42.373 147.02 41.9775 145.711 41.9775C144.412 41.9775 143.46 42.373 142.854 43.1641ZM155.76 40.2344C155.682 39.9805 155.638 39.7705 155.628 39.6045C155.628 39.1748 155.872 38.9551 156.36 38.9453H159.085C159.544 38.9453 159.954 39.0625 160.315 39.2969C160.677 39.5215 160.926 39.834 161.062 40.2344L163.465 48.1299L165.838 40.2344C166.102 39.375 166.658 38.9453 167.508 38.9453H170.101C170.96 38.9453 171.517 39.375 171.771 40.2344L174.144 48.1299L176.546 40.2344C176.683 39.834 176.932 39.5215 177.293 39.2969C177.654 39.0625 178.064 38.9453 178.523 38.9453H181.248C181.727 38.9453 181.971 39.165 181.98 39.6045C181.98 39.7803 181.937 39.9902 181.849 40.2344L177.41 53.7109C177.273 54.1113 177.029 54.4287 176.678 54.6631C176.326 54.8877 175.95 55 175.55 55H173.484C173.084 55 172.703 54.8828 172.342 54.6484C171.98 54.4043 171.741 54.0918 171.624 53.7109L168.812 44.9805L165.984 53.7109C165.867 54.0918 165.628 54.4043 165.267 54.6484C164.905 54.8828 164.524 55 164.124 55H162.059C161.658 55 161.282 54.8877 160.931 54.6631C160.579 54.4287 160.335 54.1113 160.198 53.7109L155.76 40.2344ZM185.291 53.1543C183.787 51.7285 183.035 49.6777 183.035 47.002C183.035 44.3164 183.792 42.2559 185.306 40.8203C186.819 39.375 188.919 38.6523 191.604 38.6523C194.29 38.6523 196.385 39.3555 197.889 40.7617C199.393 42.1582 200.145 44.165 200.145 46.7822V47.6172C200.145 47.8809 200.057 48.1006 199.881 48.2764C199.715 48.4424 199.5 48.5254 199.236 48.5254H188.206C188.304 49.7266 188.646 50.6006 189.231 51.1475C189.827 51.6943 190.774 51.9678 192.073 51.9678C193.372 51.9678 194.261 51.6748 194.739 51.0889C195.218 50.5029 195.809 50.2051 196.512 50.1953H198.694C198.958 50.1953 199.173 50.2832 199.339 50.459C199.515 50.625 199.603 50.8398 199.603 51.1035C199.603 53.9062 196.932 55.3027 191.59 55.293C188.895 55.293 186.795 54.5801 185.291 53.1543ZM188.177 45.4346H194.988C194.891 43.1299 193.758 41.9775 191.59 41.9775C189.432 41.9775 188.294 43.1299 188.177 45.4346ZM213.943 42.666L211.688 42.5781C210.369 42.5781 209.109 43.3008 207.908 44.7461V54.1064C207.908 54.3701 207.82 54.585 207.645 54.751C207.479 54.917 207.269 55 207.015 55H203.733C203.47 55 203.255 54.917 203.089 54.751C202.923 54.585 202.84 54.3701 202.84 54.1064V39.8535C202.84 39.5898 202.923 39.375 203.089 39.209C203.265 39.0332 203.479 38.9453 203.733 38.9453H207.015C207.278 38.9453 207.493 39.0332 207.659 39.209C207.825 39.375 207.908 39.5898 207.908 39.8535V40.7764C208.904 40.0537 209.861 39.5215 210.779 39.1797C211.707 38.8281 212.918 38.6523 214.412 38.6523C214.676 38.6523 214.891 38.7402 215.057 38.916C215.232 39.082 215.32 39.292 215.32 39.5459V41.7725C215.32 42.0361 215.232 42.251 215.057 42.417C214.891 42.583 214.676 42.666 214.412 42.666H213.943Z" fill="white"/>
//                 </svg>
//         </div>
          
    
//         <!-- Navigation -->
//         <div class="col-md-7" style="margin: 1%;padding: 0%;">
//             <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end" style="background-color: #062345 !important" >
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                         <a class="nav-link" href="../home/shelter.html">HOME</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="../projections/projections.html">PROJECTIONS</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="../sheltermap/sheltermap.html">SHELTER MAPS</a>
//                     </li>
//                     <li class="nav-item active">
//                         <a class="nav-link" href="../tips/tips.html">TIPS</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//         <div class="col-md-3" style="padding-top: .25%; background-color:#062345;font-family: 'DM Sans'; color: white; width: 50%;">
//         <!--<div style="background-color: white ;border-radius: 12px;color: #062345;width: 50%; display:flex; justify-content: center;">SIGN OUT</div>-->
//       </div>
//     </div>
//     <!-- <div>
//         <script>
//             navbar();
//         </script>    
//     </div> -->
//     <section>
//         <h1 class="projectionstitle"><span style="color: #FFF" > Projections. </span> Keep you a step ahead.</h1>
//         <div class="locationAddress">
//             <svg class="yourLocation" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
//                 <path d="M10 0C7.34875 0.00297771 4.80694 1.05753 2.93222 2.9323C1.0575 4.80706 0.00297764 7.34894 0 10.0003C0 14.0691 2.95375 17.448 6.0825 21.0243C7.0725 22.1568 8.0975 23.3281 9.01 24.5131C9.12677 24.6646 9.27675 24.7873 9.44838 24.8717C9.62002 24.9561 9.80873 25 10 25C10.1913 25 10.38 24.9561 10.5516 24.8717C10.7233 24.7873 10.8732 24.6646 10.99 24.5131C11.9025 23.3281 12.9275 22.1568 13.9175 21.0243C17.0462 17.448 20 14.0691 20 10.0003C19.997 7.34894 18.9425 4.80706 17.0678 2.9323C15.1931 1.05753 12.6513 0.00297771 10 0ZM10 13.7504C9.25832 13.7504 8.5333 13.5304 7.91661 13.1184C7.29993 12.7063 6.81928 12.1206 6.53545 11.4354C6.25162 10.7501 6.17736 9.9961 6.32205 9.26865C6.46675 8.5412 6.8239 7.873 7.34835 7.34854C7.8728 6.82408 8.54098 6.46692 9.26841 6.32222C9.99584 6.17752 10.7498 6.25179 11.4351 6.53562C12.1203 6.81946 12.706 7.30012 13.118 7.91682C13.5301 8.53352 13.75 9.25856 13.75 10.0003C13.75 10.9948 13.3549 11.9487 12.6517 12.652C11.9484 13.3553 10.9946 13.7504 10 13.7504Z" fill="white"/>
//             </svg>
//             <form>
//                 <!--this is the search icon from Font Awesome-->
//                 <!-- <i class="fas fa-search"></i> -->
//                 <!--"input" tag makes the search bar take input, "placeholder" is temp what shows, "onkeyup" assigned the js function which is called everytime a key is released in the search bar-->
//                 <!--ID: used by app.js though the parentheses of document.getElementById()-->
//                 <input type="text" class="nameAddress" name="" id="search-item" placeholder="Enter a location"> <!--this is the search bar, placeholder holds the words inside, onkeyup calls a js function-->
//             </form>
//             <!--<h2 class="nameAddress">4700 Keele St, Toronto, ON M3J 1P3</h2>-->
//         </div>
//     </section>
// </body>
// </html> 