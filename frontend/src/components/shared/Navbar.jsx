import React from "react"

const Navbar =()=>{
    return (
<>
<div className="bg-white">
    <div>
        <h1 className="text-2xl font-bold">Job<span className="text-[#F83002]">Portal</span></h1>

    </div>

    <div>
<ul className="flex font-medium items-center gap-5">


    <li>Home</li>
    <li>Jobs</li>
    <li>Browse</li>
    {/* <li> <Link>Home</Link></li>
     <li> <Link>Job</Link></li> 
     <li> <Link>Browse</Link></li> */}
</ul>

    </div>
</div>

</>

    )
}

export default Navbar