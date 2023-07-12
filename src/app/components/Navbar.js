'use client'
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



function ProfileMenu(){
  return (
 

      <div className="flex items-center text-center px-2"> 

      
      

      <DropdownMenu>
      <DropdownMenuTrigger className="text-sm">
        <Image className="rounded-full" src="/images/placeholder.jpg" height={25} width={25}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign up</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
        <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
        <DropdownMenuItem>Help</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>



      </div>  



 
 
  )
}



function handleSearchClick(){
  alert("Where u wanna go")
}

function RightBar(){
  return(
  <div className="p-2 grid grid-cols-6 gap-2 w-2/3">
  <h2 className="col-span-3 text-sm font-normal flex items-center justify-center">Airbnb your home</h2>
  <div className="col-span-1 flex items-center justify-center">
    <Image onClick={handleSearchClick} src="/images/world.png" width={20} height={20} />
  </div>
  <ProfileMenu className="col-span-2" />
</div>

  
  )
}


function SearchBar(){
  return(
 
    <button onClick={handleSearchClick} className="w-3/4 grid grid-cols-3 gap-3 border p-2 rounded-full text-center items-center shadow-md">
      <p className="col-span-1 text-sm font-medium">Anywhere</p>
      <p className="col-span-1 text-sm font-medium">Any Week</p>
      <div className="col-span-1 flex">
      <p className="text-sm font-light text-gray-400">Add Guests</p>
      <Image src="/images/search.png" width={20} height={20}/>
      </div>
    </button>
 
  
  )
}


const Navbar = () => {
  return (
    <main>
      <div className="border-b p-5 grid grid-cols-3">
        <Image className="p-2 ml-10" src='/images/logo.png' width={114} height={114}/>
        <SearchBar/>
        <RightBar/>

      </div>
      
      

    </main>
    
  )
}

export default Navbar