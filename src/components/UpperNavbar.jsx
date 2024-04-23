function UpperNavbar() {
  return (
    <div className="w-screen">
      <div className="flex flex-row h-5 bg-[#ececec] px-5 items-center">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <p className="text-xs">GOODMINTON - WE SERVE THE BEST!</p>
        </div>
        <div className="flex-1 flex flex-row gap-5 justify-end">
          <p className="text-xs">FAQs</p>
          <p className="text-xs">Contact Us</p>
          <p className="text-xs">INDONESIA</p>
        </div>
      </div>
    </div>
  )
}

export default UpperNavbar