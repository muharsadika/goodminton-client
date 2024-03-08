import { useSelector } from "react-redux"
import { useProfileUpdate } from "../hook/useProfileUpdate"


function CardProfile() {

  const profile = useSelector(state => state.profile)
  console.log(profile);
  const { formValues, handleChange, handleFileChange, handleSubmit, isLoading } = useProfileUpdate()


  return (
    <form onSubmit={handleSubmit} className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
      <div className="flex flex-col items-center gap-5 absolute ml-[-500px]">
        <div className="relative">
          <label htmlFor="profile_picture">
            <img className="rounded-full w-40 border hover:opacity-50 cursor-pointer" src={profile.profile_picture} alt="profile" />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 cursor-pointer rounded-full bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100">
              <span className="text-white text-lg">Change</span>
            </div>
          </label>
          <input id="profile_picture" onChange={handleFileChange} type="file" hidden />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 items-center">
        <label className="text-right mr-5">Profile :</label>
        <input
          name="fullname"
          value={formValues.fullname}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1 px-2 text-gray-400"
          type="text"
          placeholder={profile.fullname}
        />

        <label className="text-right mr-5">Username :</label>
        <input
          name="username"
          value={formValues.username}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1 px-2 text-gray-400"
          type="text"
          placeholder={profile.username}
        />

        <label className="text-right mr-5">Email :</label>
        <input
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1 px-2 text-gray-400"
          type="email"
          placeholder={profile.email}
        />

        <label className="text-right mr-5">Phone :</label>
        <input
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1 px-2 text-gray-400"
          type="text"
          placeholder={profile.phone}
        />

        <label className="text-right mr-5">Address :</label>
        <textarea
          name="address"
          value={formValues.address}
          onChange={handleChange}
          className="border border-gray-300 rounded py-1 px-2 text-gray-400"
          placeholder={profile.address}
        />

        <div className="col-span-2 flex justify-end">
          {isLoading ? (
            <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
              Loading...
            </button>
          ) : (
            <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  )
}

export default CardProfile


// import { useRef } from "react";
// import { useSelector } from "react-redux"
// import { useProfileUpdate } from "../hook/useProfileUpdate"


// function CardProfile() {

//   const profile = useSelector(state => state.profile)
//   console.log(profile);
//   const { formValues, handleChange, handleFileChange, handleSubmit, isLoading } = useProfileUpdate()

//   // Buat referensi untuk input file
//   const fileInputRef = useRef();

//   // Fungsi untuk menangani klik pada gambar
//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   }


//   return (
//     <form onSubmit={handleSubmit} className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
//       <div className="flex flex-col items-center gap-5 absolute ml-[-500px]">
//         <div className="relative">
//           <img className="rounded-full w-40 border hover:opacity-50 cursor-pointer" src={profile.profile_picture} alt="profile" />
//           <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 cursor-pointer rounded-full bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100" onClick={handleImageClick}>
//             <span className="text-white text-lg">Change</span>
//           </div>
//         </div>
//         <input type="file" id="file" onChange={handleFileChange} style={{ display: 'none' }} ref={fileInputRef} />
//         {/* <label htmlFor="file" className="bg-black text-white text-xs rounded p-1 hover:bg-gray-800 cursor-pointer">
//           change Photo
//         </label> */}
//       </div>
//       <div className="grid grid-cols-2 gap-5 items-center">
//         <label className="text-right mr-5">Profile :</label>
//         <input
//           name="fullname"
//           value={formValues.fullname}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="text"
//           placeholder={profile.fullname}
//         />

//         <label className="text-right mr-5">Username :</label>
//         <input
//           name="username"
//           value={formValues.username}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="text"
//           placeholder={profile.username}
//         />

//         <label className="text-right mr-5">Email :</label>
//         <input
//           name="email"
//           value={formValues.email}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="email"
//           placeholder={profile.email}
//         />

//         <label className="text-right mr-5">Phone :</label>
//         <input
//           name="phone"
//           value={formValues.phone}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="text"
//           placeholder={profile.phone}
//         />

//         <label className="text-right mr-5">Address :</label>
//         <textarea
//           name="address"
//           value={formValues.address}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           placeholder={profile.address}
//         />

//         <div className="col-span-2 flex justify-end">
//           {isLoading ? (
//             <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
//               Loading...
//             </button>
//           ) : (
//             <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
//               Save
//             </button>
//           )}
//         </div>
//       </div>
//     </form>
//   )
// }

// export default CardProfile










// import { useSelector } from "react-redux"
// import { useProfileUpdate } from "../hook/useProfileUpdate"

// function CardProfile() {

//   const profile = useSelector(state => state.profile)
//   console.log(profile);
//   const { formValues, handleChange, handleFileChange, handleSubmit, isLoading } = useProfileUpdate()
//   const fileInputRef = useRef();

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-row justify-center border rounded-2xl my-auto p-20 bg-gray-50">
//       <div className="flex flex-col items-center gap-5 absolute ml-[-500px]">
//         <div className="relative">
//           <img className="rounded-full w-40 border hover:opacity-50 cursor-pointer" src={profile.profile_picture} alt="profile" />
//           <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 cursor-pointer rounded-full bg-gray-800 bg-opacity-50 opacity-0 hover:opacity-100">
//             <span className="text-white text-lg">Change</span>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-5 items-center">
//         <label className="text-right mr-5">Profile :</label>
//         <input
//           name="fullname"
//           value={formValues.fullname}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="text"
//           placeholder={profile.fullname}
//         />

//         <label className="text-right mr-5">Username :</label>
//         <input
//           name="username"
//           value={formValues.username}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="text"
//           placeholder={profile.username}
//         />

//         <label className="text-right mr-5">Email :</label>
//         <input
//           name="email"
//           value={formValues.email}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="email"
//           placeholder={profile.email}
//         />

//         <label className="text-right mr-5">Phone :</label>
//         <input
//           name="phone"
//           value={formValues.phone}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           type="text"
//           placeholder={profile.phone}
//         />

//         <label className="text-right mr-5">Address :</label>
//         <textarea
//           name="address"
//           value={formValues.address}
//           onChange={handleChange}
//           className="border border-gray-300 rounded py-1 px-2 text-gray-400"
//           placeholder={profile.address}
//         />

//         <div className="col-span-2 flex justify-end">
//           {isLoading ? (
//             <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
//               Loading...
//             </button>
//           ) : (
//             <button type="submit" className="bg-black text-white rounded px-5 py-2 hover:bg-gray-800 hover:text-white">
//               Save
//             </button>
//           )}
//         </div>
//       </div>
//     </form>
//   )
// }

// export default CardProfile