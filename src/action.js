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