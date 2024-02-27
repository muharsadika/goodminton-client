import CardProfile from "./parts/CardProfile"


function ProfileContainer() {
  return (
    <div>
      <CardProfile />
    </div>
  )
}

export default ProfileContainer





































// import { useDispatch, useSelector } from "react-redux";
// import { getProfile } from "../../redux/slice/profileSlice";
// import { useEffect, useState } from "react";
// import { useUpdateProfile } from "./hook/useProfileUpdate";

// function ProfileContainer() {
//   const profile = useSelector((state) => state.profile);
//   const dispatch = useDispatch();
//   const updateProfileMutation = useUpdateProfile();

//   // Menambahkan state lokal untuk melacak nilai input form
//   const [formValues, setFormValues] = useState({
//     fullname: profile.fullname,
//     username: profile.username,
//     email: profile.email,
//     phone: profile.phone,
//   });

//   useEffect(() => {
//     dispatch(getProfile());
//   }, [dispatch]);

//   const onSubmit = (event) => {
//     event.preventDefault();
//     updateProfileMutation.mutate(formValues);
//   };

//   const handleChange = (event) => {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   };
//   console.log(profile);

//   return (
//     <form onSubmit={onSubmit} className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
//       <div>
//         <img className="rounded-full w-40 border border-black" src={profile.profile_picture} alt="profile" />
//       </div>
//       <div className="grid grid-cols-2 gap-5 items-center">
//         <label className="text-right mr-5">Profile :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="fullname"
//           value={formValues.fullname}
//           onChange={handleChange}
//           placeholder={profile.fullname}
//         />
//         <label className="text-right mr-5">Username :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="username"
//           value={formValues.username}
//           onChange={handleChange}
//           placeholder={profile.username}
//         />
//         <label
//           className="text-right mr-5">Email :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="email"
//           value={formValues.email}
//           onChange={handleChange}
//           placeholder={profile.email}
//         />
//         <label
//           className="text-right mr-5">Phone :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="phone"
//           value={formValues.phone}
//           onChange={handleChange}
//           placeholder={profile.phone}
//         />
//         <div className="col-span-2 flex justify-end">
//           <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">Save</button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default ProfileContainer;




// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfile } from "../../redux/slice/profileSlice";
// import { useUpdateProfile } from "./hook/useProfileUpdate";

// function ProfileContainer() {
//   const profile = useSelector((state) => state.profile);
//   const dispatch = useDispatch();
//   const [newProfileData, setNewProfileData] = useState({
//     fullname: "",
//     username: "",
//     email: "",
//     phone: "",
//   });
//   const { mutate: updateProfile, isLoading } = useUpdateProfile();

//   useEffect(() => {
//     dispatch(getProfile());
//   }, [dispatch]);

//   const handleProfileUpdate = () => {
//     updateProfile(newProfileData);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProfileData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
//       <div>
//         <img
//           className="rounded-full w-40 border border-black"
//           src={profile.profile_picture}
//           alt="profile"
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-5 items-center">
//         <label className="text-right mr-5">Full Name:</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="fullname"
//           value={newProfileData.fullname}
//           onChange={handleInputChange}
//         />
//         <label className="text-right mr-5">Username :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="username"
//           value={newProfileData.username}
//           onChange={handleInputChange}
//         />
//         <label className="text-right mr-5">Email :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="email"
//           value={newProfileData.email}
//           onChange={handleInputChange}
//         />
//         <label className="text-right mr-5">Phone :</label>
//         <input
//           className="border border-gray-300 rounded p-1"
//           type="text"
//           name="phone"
//           value={newProfileData.phone}
//           onChange={handleInputChange}
//         />
//         <div className="col-span-2 flex justify-end">
//           <button
//             className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white"
//             onClick={handleProfileUpdate}
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileContainer;



// import { useDispatch, useSelector } from "react-redux"
// import { getProfile } from "../../redux/slice/profileSlice"
// import { useEffect, useState } from "react"
// import { useProfileUpdate } from "./hook/useProfileUpdate"

// function ProfileContainer() {
//   const profile = useSelector(state => state.profile)
//   const dispatch = useDispatch()
//   const [updatedProfile, setUpdatedProfile] = useState({});
//   const [isSaving, setIsSaving] = useState(false);

//   useEffect(() => {
//     dispatch(getProfile())
//   }, [dispatch])
//   console.log(profile);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedProfile(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   const handleSave = () => {
//     setIsSaving(true); // Mengubah status penyimpanan menjadi true
//     updateProfileMutation.mutate(updatedProfile); // Memulai pembaruan profil
//   }

//   const updateProfileMutation = useProfileUpdate(); // Memanggil custom hook pembaruan profil

//   useEffect(() => {
//     if (updateProfileMutation.isSuccess) {
//       setIsSaving(false); // Mengubah status penyimpanan menjadi false saat pembaruan berhasil
//       dispatch(getProfile()); // Memperbarui profil setelah pembaruan berhasil
//     }
//   }, [updateProfileMutation.isSuccess, dispatch])

//   return (
//     <div className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
//       <div>
//         <img className="rounded-full w-40 border border-black" src={profile.profile_picture} alt="profile" />
//       </div>
//       <div className="grid grid-cols-2 gap-5 items-center">
//         <label className="text-right mr-5">Profile :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.fullname} onChange={handleInputChange} name="fullname" />
//         <label className="text-right mr-5">Username :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.username} onChange={handleInputChange} name="username" />
//         <label className="text-right mr-5">Email :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.email} onChange={handleInputChange} name="email" />
//         <label className="text-right mr-5">Phone :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.phone} onChange={handleInputChange} name="phone" />
//         <div className="col-span-2 flex justify-end">
//           <button disabled={isSaving} onClick={handleSave} className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
//             {isSaving ? 'Saving...' : 'Save'}
//           </button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileContainer


// import { useDispatch, useSelector } from "react-redux"
// import { getProfile } from "../../redux/slice/profileSlice"
// import { useEffect } from "react"

// function ProfileContainer() {
//   const profile = useSelector(state => state.profile)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getProfile())
//   }, [dispatch])

//   return (
//     <div className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
//       <div>
//         <img className="rounded-full w-40 border border-black" src={profile.profile_picture} alt="profile" />
//       </div>
//       <div className="grid grid-cols-2 gap-5 items-center">
//         <label className="text-right mr-5">Profile :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.fullname} />
//         <label className="text-right mr-5">Username :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.username} />
//         <label className="text-right mr-5">Email :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.email} />
//         <label className="text-right mr-5">Phone :</label>
//         <input className="border border-gray-300 rounded p-1" type="text" placeholder={profile.phone} />
//         <div className="col-span-2 flex justify-end">
//           <button className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">Save</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileContainer