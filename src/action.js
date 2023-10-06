import { redirect } from "react-router-dom";

const URL = "https://nomad-vt3u.onrender.com"


// CREATE ACTION 
export const createAction = async ({request}) => {
    const formData = await request.formData()

    const TravelUser = {
        name: formData.get('name'),
        location: formData.get('location'),
        image: formData.get('image'),
        comment: formData.get('comment'),
    };

// SEND NEW BOOKMARK TO OUR API
await fetch(URL + '/traveluser', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(TravelUser),
  })

   return redirect("/")
}

// UPDATE ACTION 
export const updateAction = async ({ params, request }) => {
    const formData = await request.formData();
  
    const TravelUser = {
        name: formData.get('name'),
        location: formData.get('location'),
        image: formData.get('image'),
        comment: formData.get('comment'),
    };
  
    await fetch(URL + "/traveluser/" + params.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TravelUser),
    });
  
    return redirect(`/${params.id}`);
  };


// DELETE ACTION
export const deleteAction = async ({params}) => {
    await fetch (URL + '/traveluser/' +params.id, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json",
        },
    });
    return redirect('/')
};


// ELLIOT CODE
// import { redirect } from 'react-router-dom';

// const URL = 'https://nomad-blog.onrender.com'


// // CREATE ACTION 
// export const createAction = async ({request}) => {
//     const formData = await request.formData()

//     const PostUser = {
//       title: formData.get('title'),
//       username: formData.get('username'),
//       location: formData.get('location'),
//       image: formData.get('image'),
//       caption: formData.get('caption'),
//   };

// // SEND NEW POST TO OUR API
// await fetch(URL + '/traveluser', {
//     method: 'post',
//     headers: {
//       "Content-Type": 'application/json',
//     },
//     body: JSON.stringify(PostUser),
//   })

//    return redirect('/')
// }

// // UPDATE ACTION 
// export const updateAction = async ({ params, request }) => {
//     const formData = await request.formData();
  
//     const PostUser = {
//       title: formData.get('title'),
//       username: formData.get('username'),
//       location: formData.get('location'),
//       image: formData.get('image'),
//       caption: formData.get('caption'),
//   };
  
//     await fetch(URL + '/postuser/' + params.id, {
//       method: 'put',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(PostUser),
//     });
  
//     return redirect(`/${params.id}`);
//   };


// // DELETE ACTION
// export const deleteAction = async ({params}) => {
//     await fetch (URL + '/postuser/' +params.id, {
//         method: 'delete',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//     return redirect('/')
// };

// // CREATE USER ACTION 
// export const createUserAction = async ({request}) => {
//   const formData = await request.formData()

//   const User = {
//     username: formData.get('username'),
//     password: formData.get('password'),
// };

// // SEND NEW POST TO OUR API
// await fetch(URL + '/userlogin', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(User),
// })

//  return redirect('/')
// }

// // UPDATE USER ACTION
// export const updateUserAction = async ({ params, request }) => {
//   const formData = await request.formData();

//   const User = {
//     username: formData.get('username'),
//     password: formData.get('password'),
// };

//   await fetch(URL + '/postuserlogin/' + params.id, {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(User),
//   });

//   return redirect(`/${params.id}`);
// };

// // DELETE USER ACTION
// export const deleteUserAction = async ({params}) => {
//   await fetch (URL + '/userlogin/' +params.id, {
//       method: 'delete',
//       headers: {
//           'Content-Type': "application/json",
//       },
//   });
//   return redirect('/')
// };